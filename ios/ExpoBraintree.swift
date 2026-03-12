//
//  BTPayPalVaultRequest.swift
//  expo-braintree
//
//  Created by Maciej Sasinowski on 28/04/2024.
//

import Braintree
import Foundation
import React

@objc(ExpoBraintree)
class ExpoBraintree: NSObject, BTThreeDSecureRequestDelegate {
  var threeDSecureClient: BTThreeDSecureClient? = nil

  @objc(requestBillingAgreement:withResolver:withRejecter:)
  func requestBillingAgreement(
    options: [String: String], resolve: @escaping RCTPromiseResolveBlock,
    reject: @escaping RCTPromiseRejectBlock
  ) {
    let clientToken = options["clientToken"] ?? ""
    // Step 1: Initialize Braintree API Client
    let apiClientOptional = BTAPIClient(authorization: clientToken)
    guard let apiClient = apiClientOptional else {
      return reject(
        EXCEPTION_TYPES.SWIFT_EXCEPTION.rawValue,
        ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue,
        NSError(domain: ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue, code: -1))
    }
    // Step 2: Initialize BPayPal API Client
    let payPalClient = BTPayPalClient(apiClient: apiClient)
    let vaultRequest = prepareBTPayPalVaultRequest(options: options)
    payPalClient.tokenize(vaultRequest) {
      (accountNonce, error) -> Void in
      if let accountNonce = accountNonce {
        // Step 3: Handle Success: Paypal Nonce Created resolved
        return resolve(
          prepareBTPayPalAccountNonceResult(
            accountNonce: accountNonce
          ))
      } else if let error = error as? BTPayPalError {
        // Step 3: Handle Error: Tokenize error
        switch error.errorCode {
        case BTPayPalError.disabled.errorCode:
          return reject(
            EXCEPTION_TYPES.PAYPAL_DISABLED_IN_CONFIGURATION.rawValue,
            ERROR_TYPES.USER_CANCEL_TRANSACTION_ERROR.rawValue,
            NSError(
              domain: ERROR_TYPES.PAYPAL_DISABLED_IN_CONFIGURATION_ERROR.rawValue,
              code: BTPayPalError.disabled.errorCode)
          )
        case BTPayPalError.canceled.errorCode:
          return reject(
            EXCEPTION_TYPES.USER_CANCEL_EXCEPTION.rawValue,
            ERROR_TYPES.USER_CANCEL_TRANSACTION_ERROR.rawValue,
            NSError(
              domain: ERROR_TYPES.USER_CANCEL_TRANSACTION_ERROR.rawValue,
              code: BTPayPalError.canceled.errorCode)
          )
        default:
          return reject(
            EXCEPTION_TYPES.SWIFT_EXCEPTION.rawValue,
            ERROR_TYPES.TOKENIZE_VAULT_PAYMENT_ERROR.rawValue,
            NSError(
              domain: error.localizedDescription,
              code: -1
            )
          )
        }
      }
    }
  }

  @objc(requestOneTimePayment:withResolver:withRejecter:)
  func requestOneTimePayment(
    options: [String: String], resolve: @escaping RCTPromiseResolveBlock,
    reject: @escaping RCTPromiseRejectBlock
  ) {
    let clientToken = options["clientToken"] ?? ""
    // Step 1: Initialize Braintree API Client
    let apiClientOptional = BTAPIClient(authorization: clientToken)
    guard let apiClient = apiClientOptional else {
      return reject(
        EXCEPTION_TYPES.SWIFT_EXCEPTION.rawValue,
        ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue,
        NSError(domain: ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue, code: -1))
    }
    // Step 2: Initialize BPayPal API Client
    let payPalClient = BTPayPalClient(apiClient: apiClient)
    let checkoutRequest = prepareBTPayPalCheckoutRequest(options: options)
    payPalClient.tokenize(checkoutRequest) {
      (accountNonce, error) -> Void in
      if let accountNonce = accountNonce {
        // Step 3: Handle Success: Paypal Nonce Created resolved
        return resolve(
          prepareBTPayPalAccountNonceResult(
            accountNonce: accountNonce
          ))
      } else if let error = error as? BTPayPalError {
        // Step 3: Handle Error: Tokenize error
        switch error.errorCode {
        case BTPayPalError.disabled.errorCode:
          return reject(
            EXCEPTION_TYPES.PAYPAL_DISABLED_IN_CONFIGURATION.rawValue,
            ERROR_TYPES.USER_CANCEL_TRANSACTION_ERROR.rawValue,
            NSError(
              domain: ERROR_TYPES.PAYPAL_DISABLED_IN_CONFIGURATION_ERROR.rawValue,
              code: BTPayPalError.disabled.errorCode)
          )
        case BTPayPalError.canceled.errorCode:
          return reject(
            EXCEPTION_TYPES.USER_CANCEL_EXCEPTION.rawValue,
            ERROR_TYPES.USER_CANCEL_TRANSACTION_ERROR.rawValue,
            NSError(
              domain: ERROR_TYPES.USER_CANCEL_TRANSACTION_ERROR.rawValue,
              code: BTPayPalError.canceled.errorCode)
          )
        default:
          return reject(
            EXCEPTION_TYPES.SWIFT_EXCEPTION.rawValue,
            ERROR_TYPES.TOKENIZE_VAULT_PAYMENT_ERROR.rawValue,
            NSError(
              domain: error.localizedDescription,
              code: -1
            )
          )
        }
      }
    }
  }

  @objc(getDeviceDataFromDataCollector:withResolver:withRejecter:)
  func getDeviceDataFromDataCollector(
    options: [String: String], resolve: @escaping RCTPromiseResolveBlock,
    reject: @escaping RCTPromiseRejectBlock
  ) {
    // Step 1: Initialize Braintree API Client
    let clientToken = options["clientToken"] ?? ""
    let apiClientOptional = BTAPIClient(authorization: clientToken)
    guard let apiClient = apiClientOptional else {
      return reject(
        EXCEPTION_TYPES.SWIFT_EXCEPTION.rawValue,
        ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue,
        NSError(domain: ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue, code: -1))
    }
    // Step 2: Initialize DataCollerctor
    let dataCollector = BTDataCollector(apiClient: apiClient)
    // Step 3: Try To Collect Device Data and make a corelation Id if that is possible
    dataCollector.collectDeviceData { corelationId, dataCollectorError in
      if let corelationId = corelationId {
        // Step 4: Return corelation id
        return resolve(corelationId)
      } else if let dataCollectorError = dataCollectorError {
        // Step 4: Handle Error: DataCollector error
        return reject(
          EXCEPTION_TYPES.SWIFT_EXCEPTION.rawValue,
          ERROR_TYPES.DATA_COLLECTOR_ERROR.rawValue,
          NSError(
            domain: ERROR_TYPES.DATA_COLLECTOR_ERROR.rawValue,
            code: -1)
        )
      }
    }
  }

  @objc(tokenizeCardData:withResolver:withRejecter:)
  func tokenizeCardData(
    options: [String: String], resolve: @escaping RCTPromiseResolveBlock,
    reject: @escaping RCTPromiseRejectBlock
  ) {
    print("ExpoBraintree: Starting tokenizeCardData")
    let clientToken = options["clientToken"] ?? ""
    print("ExpoBraintree: Client token received")

    // Step 1: Initialize Braintree API Client
    print("ExpoBraintree: Step 1 - Initializing Braintree API Client")
    let apiClientOptional = BTAPIClient(authorization: clientToken)
    guard let apiClient = apiClientOptional else {
      print("ExpoBraintree: API Client initialization failed")
      return reject(
        EXCEPTION_TYPES.SWIFT_EXCEPTION.rawValue,
        ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue,
        NSError(domain: ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue, code: -1))
    }
    print("ExpoBraintree: API Client initialized successfully")

    // Step 2: Initialize Card Client
    print("ExpoBraintree: Step 2 - Initializing Card Client")
    let cardClient = BTCardClient(apiClient: apiClient)
    print("ExpoBraintree: Card Client initialized")

    // Step 3: Prepare Card Data
    print("ExpoBraintree: Step 3 - Preparing Card Data")
    let card = prepareCardData(options: options)
    print("ExpoBraintree: Card data prepared")

    // Step 4: Tokenize the card
    print("ExpoBraintree: Step 4 - Tokenizing the card")
    cardClient.tokenize(card) { (cardNonce, error) in
      if let cardNonce = cardNonce {
        print("ExpoBraintree: Card tokenization successful")
        let result = prepareBTCardNonceResult(cardNonce: cardNonce)
        print("ExpoBraintree: Card nonce result prepared")
        return resolve(result)
      } else if let error = error {
        print("ExpoBraintree: Card tokenization failed with error: \(error.localizedDescription)")
        return reject(
          EXCEPTION_TYPES.TOKENIZE_EXCEPTION.rawValue,
          ERROR_TYPES.CARD_TOKENIZATION_ERROR.rawValue,
          NSError(
            domain: ERROR_TYPES.CARD_TOKENIZATION_ERROR.rawValue,
            code: (error as NSError).code,
            userInfo: ["description": error.localizedDescription]
          )
        )
      } else {
        print("ExpoBraintree: Unexpected error - both cardNonce and error are nil")
        return reject(
          EXCEPTION_TYPES.TOKENIZE_EXCEPTION.rawValue,
          ERROR_TYPES.UNEXPECTED_TOKENIZATION_ERROR.rawValue,
          NSError(domain: ERROR_TYPES.UNEXPECTED_TOKENIZATION_ERROR.rawValue, code: -1)
        )
      }
    }
    print("ExpoBraintree: Tokenization process initiated")
  }

  @objc(requestVenmoNonce:withResolver:withRejecter:)
  func requestVenmoNonce(
    options: [String: String], resolve: @escaping RCTPromiseResolveBlock,
    reject: @escaping RCTPromiseRejectBlock
  ) {
    let clientToken = options["clientToken"] ?? ""

    // Step 1: Initialize Braintree API Client
    let apiClientOptional = BTAPIClient(authorization: clientToken)
    guard let apiClient = apiClientOptional else {
      return reject(
        EXCEPTION_TYPES.SWIFT_EXCEPTION.rawValue,
        ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue,
        NSError(domain: ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue, code: -1))
    }

    // Step 2: Initialize BTVenmoClient API Client
    let venmoClient = BTVenmoClient(apiClient: apiClient)
    let vaultRequest = prepareBTVenmoRequest(options: options)

    venmoClient.tokenize(vaultRequest) {
      (accountNonce, error) -> Void in
      if let accountNonce = accountNonce {

        // Step 3: Handle Success: Venmo Nonce Created resolved
        return resolve(
          prepareBTVenmoAccountNonceResult(
            accountNonce: accountNonce
          ))
      } else if let error = error as? BTVenmoError {
        // Step 3: Handle Error: Tokenize error
        switch error.errorCode {
        case BTVenmoError.disabled.errorCode:
          return reject(
            EXCEPTION_TYPES.VENMO_DISABLED_IN_CONFIGURATION.rawValue,
            ERROR_TYPES.USER_CANCEL_TRANSACTION_ERROR.rawValue,
            NSError(
              domain: ERROR_TYPES.VENMO_DISABLED_IN_CONFIGURATION_ERROR.rawValue,
              code: BTPayPalError.disabled.errorCode)
          )
        case BTVenmoError.canceled.errorCode:
          return reject(
            EXCEPTION_TYPES.USER_CANCEL_EXCEPTION.rawValue,
            ERROR_TYPES.USER_CANCEL_TRANSACTION_ERROR.rawValue,
            NSError(
              domain: ERROR_TYPES.USER_CANCEL_TRANSACTION_ERROR.rawValue,
              code: BTPayPalError.canceled.errorCode)
          )
        default:
          return reject(
            EXCEPTION_TYPES.SWIFT_EXCEPTION.rawValue,
            ERROR_TYPES.TOKENIZE_VAULT_PAYMENT_ERROR.rawValue,
            NSError(
              domain: error.localizedDescription,
              code: -1
            )
          )
        }
      }
    }
  }

  @objc(request3DSecurePaymentCheck:withResolver:withRejecter:)
  func request3DSecurePaymentCheck(
    options: [String: String], resolve: @escaping RCTPromiseResolveBlock,
    reject: @escaping RCTPromiseRejectBlock
  ) {
    let clientToken = options["clientToken"] ?? ""
    let nonce = options["nonce"] ?? ""
    let amount = options["amount"] ?? ""

    // Step 1: Initialize Braintree API Client
    let apiClientOptional = BTAPIClient(authorization: clientToken)
    guard let apiClient = apiClientOptional else {
      return reject(
        EXCEPTION_TYPES.SWIFT_EXCEPTION.rawValue,
        ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue,
        NSError(domain: ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue, code: -1))
    }
    if amount.isEmpty || nonce.isEmpty {
      return reject(
        EXCEPTION_TYPES.TOKENIZE_EXCEPTION.rawValue,
        ERROR_TYPES.D_SECURE_CARD_TOKENIZATION_VALIDATION_ERROR.rawValue,
        NSError(domain: ERROR_TYPES.D_SECURE_CARD_TOKENIZATION_VALIDATION_ERROR.rawValue, code: -1))
    }

    self.threeDSecureClient = BTThreeDSecureClient(apiClient: apiClient)
    guard let secureClient = self.threeDSecureClient else {
      return reject(
        EXCEPTION_TYPES.SWIFT_EXCEPTION.rawValue,
        ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue,
        NSError(domain: ERROR_TYPES.API_CLIENT_INITIALIZATION_ERROR.rawValue, code: -1))
    }

    let threeDSSecureRequest = prepare3DSecureData(options: options)
    threeDSSecureRequest.threeDSecureRequestDelegate = self

    secureClient.startPaymentFlow(threeDSSecureRequest) {
      (threeDSecureNonceOptional, error) -> Void in
      if let tokenizedCard = threeDSecureNonceOptional?.tokenizedCard {
        if tokenizedCard.threeDSecureInfo.liabilityShiftPossible {
          if tokenizedCard.threeDSecureInfo.liabilityShifted {
            // 3D Secure authentication success
            return resolve(prepare3DSecureNonceResult(tokenizedCard: tokenizedCard))
          } else {
            // 3D Secure authentication failed
            return reject(
              EXCEPTION_TYPES.TOKENIZE_EXCEPTION.rawValue,
              ERROR_TYPES.D_SECURE_LIABILITY_NOT_SHIFTED.rawValue,
              NSError(
                domain: ERROR_TYPES.D_SECURE_LIABILITY_NOT_SHIFTED.rawValue,
                code: -1,
                userInfo: ["description": "3D Secure authentication failed. Consider asking for another form of payment."]
              )
            )
          }
        } else {
          // 3D Secure authentication was not possible
          let baseResult = prepare3DSecureNonceResult(tokenizedCard: tokenizedCard)
          var result = NSMutableDictionary(dictionary: baseResult)
          result["liabilityShiftPossible"] = false
          return resolve(result)
        }
      } else if let error = error {
        // Step 4: Handle Global Error
        return reject(
          EXCEPTION_TYPES.TOKENIZE_EXCEPTION.rawValue,
          error.localizedDescription,
          NSError(
            domain: ERROR_TYPES.D_SECURE_CARD_TOKENIZATION_ERROR.rawValue,
            code: -1
          )
        )
      }
    }
  }

  //  Function needed for BTThreeDSecureRequestDelegate
  func onLookupComplete(
    _ request: BTThreeDSecureRequest,
    lookupResult: BTThreeDSecureResult,
    next: @escaping () -> Void
  ) {
    next()
  }

  private func prepareBTPayPalVaultRequest(options: [String: String]) -> BTPayPalVaultRequest {
    var mutableOptions = options
    let request = BTPayPalVaultRequest()
    request.displayName = mutableOptions["displayName"] ?? ""
    request.billingAgreementDescription = mutableOptions["billingAgreementDescription"] ?? ""
    return request
  }

  private func prepareBTPayPalCheckoutRequest(options: [String: String]) -> BTPayPalCheckoutRequest {
    let amount = options["amount"] ?? ""
    let request = BTPayPalCheckoutRequest(amount: amount)
    request.currencyCode = options["currencyCode"] ?? "USD"
    request.displayName = options["displayName"] ?? ""
    request.localeCode = BTPayPalLocaleCode.en_US
    return request
  }

  private func prepare3DSecureData(options: [String: String]) -> BTThreeDSecureRequest {
    var mutableOptions = options
    let request = BTThreeDSecureRequest()
    request.amount = NSDecimalNumber(string: mutableOptions["amount"])
    request.nonce = mutableOptions["nonce"] ?? ""
    request.email = mutableOptions["email"] ?? ""
    request.billingAddress = prepareBillingAddress(options: mutableOptions)
    return request
  }

  private func prepareBillingAddress(options: [String: String]) -> BTThreeDSecurePostalAddress {
    let address = BTThreeDSecurePostalAddress()
    address.givenName = options["givenName"] ?? ""
    address.surname = options["surname"] ?? ""
    address.phoneNumber = options["phoneNumber"] ?? ""
    address.streetAddress = options["streetAddress"] ?? ""
    address.extendedAddress = options["extendedAddress"] ?? ""
    address.locality = options["locality"] ?? ""
    address.region = options["region"] ?? ""
    address.postalCode = options["postalCode"] ?? ""
    address.countryCodeAlpha2 = options["countryCodeAlpha2"] ?? ""
    return address
  }
}
