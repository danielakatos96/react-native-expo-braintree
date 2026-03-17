import type { BTCardTokenizationNonceResult, BTPayPalAccountNonceResult, BTPayPalError, BTPayPalGetDeviceDataResult, BTVenmoError, BTVenmoNonceResult, RequestBillingAgreementOptions, RequestOneTimePaymentOptions, RequestVenmoNonceOptions, TokenizeCardOptions, BTCardTokenization3DSNonceResult, ThreeDSecureCheckOptions, BTThreeDError, RequestGooglePayOptions, BTGooglePayNonceResult, BTGooglePayError } from './types';
export declare function requestBillingAgreement(options: RequestBillingAgreementOptions): Promise<BTPayPalAccountNonceResult | BTPayPalError>;
export declare function requestOneTimePayment(options: RequestOneTimePaymentOptions): Promise<BTPayPalAccountNonceResult | BTPayPalError>;
export declare function getDeviceDataFromDataCollector(clientToken: string, hasUserLocationConsent?: boolean, riskCorrelationId?: string): Promise<BTPayPalGetDeviceDataResult | BTPayPalError>;
export declare function tokenizeCardData(options: TokenizeCardOptions): Promise<BTCardTokenizationNonceResult | BTPayPalError>;
export declare function requestVenmoNonce(options: RequestVenmoNonceOptions): Promise<BTVenmoNonceResult | BTVenmoError>;
export declare function request3DSecurePaymentCheck(options: ThreeDSecureCheckOptions): Promise<BTCardTokenization3DSNonceResult | BTThreeDError>;
export declare function requestGooglePayPayment(options: RequestGooglePayOptions): Promise<BTGooglePayNonceResult | BTGooglePayError>;
export * from './types';
//# sourceMappingURL=index.d.ts.map