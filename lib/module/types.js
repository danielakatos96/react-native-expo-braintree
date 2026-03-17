"use strict";

export let EXCEPTION_TYPES = /*#__PURE__*/function (EXCEPTION_TYPES) {
  EXCEPTION_TYPES["KOTLIN_EXCEPTION"] = "ExpoBraintree:`KotlinException";
  EXCEPTION_TYPES["USER_CANCEL_EXCEPTION"] = "ExpoBraintree:`UserCancelException";
  EXCEPTION_TYPES["TOKENIZE_EXCEPTION"] = "ExpoBraintree:`TokenizeException";
  return EXCEPTION_TYPES;
}({});
export let PAYPAL_EXCEPTION_TYPES = /*#__PURE__*/function (PAYPAL_EXCEPTION_TYPES) {
  PAYPAL_EXCEPTION_TYPES["PAYPAL_DISABLED_IN_CONFIGURATION"] = "ExpoBraintree:`Paypal disabled in configuration";
  return PAYPAL_EXCEPTION_TYPES;
}({});
export let VENMO_EXCEPTION_TYPES = /*#__PURE__*/function (VENMO_EXCEPTION_TYPES) {
  VENMO_EXCEPTION_TYPES["VENMO_DISABLED_IN_CONFIGURATION"] = "ExpoBraintree:`VENMO disabled in configuration";
  return VENMO_EXCEPTION_TYPES;
}({});
export let GOOGLE_PAY_ERROR_TYPES = /*#__PURE__*/function (GOOGLE_PAY_ERROR_TYPES) {
  GOOGLE_PAY_ERROR_TYPES["GOOGLE_PAY_NOT_AVAILABLE"] = "GOOGLE_PAY_NOT_AVAILABLE";
  GOOGLE_PAY_ERROR_TYPES["GOOGLE_PAY_FAILED"] = "GOOGLE_PAY_FAILED";
  return GOOGLE_PAY_ERROR_TYPES;
}({});
export let ERROR_TYPES = /*#__PURE__*/function (ERROR_TYPES) {
  ERROR_TYPES["API_CLIENT_INITIALIZATION_ERROR"] = "API_CLIENT_INITIALIZATION_ERROR";
  ERROR_TYPES["TOKENIZE_VAULT_PAYMENT_ERROR"] = "TOKENIZE_VAULT_PAYMENT_ERROR";
  ERROR_TYPES["USER_CANCEL_TRANSACTION_ERROR"] = "USER_CANCEL_TRANSACTION_ERROR";
  ERROR_TYPES["DATA_COLLECTOR_ERROR"] = "DATA_COLLECTOR_ERROR";
  ERROR_TYPES["CARD_TOKENIZATION_ERROR"] = "CARD_TOKENIZATION_ERROR";
  return ERROR_TYPES;
}({});
export let PAYPAL_ERROR_TYPES = /*#__PURE__*/function (PAYPAL_ERROR_TYPES) {
  PAYPAL_ERROR_TYPES["PAYPAL_DISABLED_IN_CONFIGURATION_ERROR"] = "PAYPAL_DISABLED_IN_CONFIGURATION_ERROR";
  return PAYPAL_ERROR_TYPES;
}({});
export let VENMO_ERROR_TYPES = /*#__PURE__*/function (VENMO_ERROR_TYPES) {
  VENMO_ERROR_TYPES["VENMO_DISABLED_IN_CONFIGURATION"] = "VENMO_DISABLED_IN_CONFIGURATION_ERROR";
  return VENMO_ERROR_TYPES;
}({});
export let THREE_D_SECURE_ERROR_TYPES = /*#__PURE__*/function (THREE_D_SECURE_ERROR_TYPES) {
  THREE_D_SECURE_ERROR_TYPES["D_SECURE_NOT_ABLE_TO_SHIFT_LIABILITY"] = "D_SECURE_NOT_ABLE_TO_SHIFT_LIABILITY";
  THREE_D_SECURE_ERROR_TYPES["D_SECURE_LIABILITY_NOT_SHIFTED"] = "D_SECURE_LIABILITY_NOT_SHIFTED";
  THREE_D_SECURE_ERROR_TYPES["PAYMENT_3D_SECURE_FAILED"] = "PAYMENT_3D_SECURE_FAILED";
  return THREE_D_SECURE_ERROR_TYPES;
}({});
export let BTPayPalCheckoutIntent = /*#__PURE__*/function (BTPayPalCheckoutIntent) {
  BTPayPalCheckoutIntent["authorize"] = "authorize";
  BTPayPalCheckoutIntent["order"] = "order";
  BTPayPalCheckoutIntent["sale"] = "sale";
  return BTPayPalCheckoutIntent;
}({});
export let BTPayPalRequestUserAction = /*#__PURE__*/function (BTPayPalRequestUserAction) {
  BTPayPalRequestUserAction["none"] = "none";
  BTPayPalRequestUserAction["payNow"] = "payNow";
  return BTPayPalRequestUserAction;
}({});
export let BoolValue = /*#__PURE__*/function (BoolValue) {
  BoolValue["true"] = "true";
  BoolValue["false"] = "false";
  return BoolValue;
}({});
export let BTVenmoPaymntMethodUsage = /*#__PURE__*/function (BTVenmoPaymntMethodUsage) {
  BTVenmoPaymntMethodUsage["multiUse"] = "multiUse";
  BTVenmoPaymntMethodUsage["singleUse"] = "singleUse";
  return BTVenmoPaymntMethodUsage;
}({});
export let GOOGLE_PAY_TOTAL_PRICE_STATUS = /*#__PURE__*/function (GOOGLE_PAY_TOTAL_PRICE_STATUS) {
  /** The total price is an estimated price and might still change (maps to 1 in Kotlin) */
  GOOGLE_PAY_TOTAL_PRICE_STATUS[GOOGLE_PAY_TOTAL_PRICE_STATUS["ESTIMATED"] = 1] = "ESTIMATED";
  /** The total price is the final price and will not change (maps to 3/else in Kotlin) */
  GOOGLE_PAY_TOTAL_PRICE_STATUS[GOOGLE_PAY_TOTAL_PRICE_STATUS["FINAL"] = 3] = "FINAL";
  return GOOGLE_PAY_TOTAL_PRICE_STATUS;
}({});
//# sourceMappingURL=types.js.map