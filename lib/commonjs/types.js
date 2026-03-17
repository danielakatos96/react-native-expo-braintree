"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VENMO_EXCEPTION_TYPES = exports.VENMO_ERROR_TYPES = exports.THREE_D_SECURE_ERROR_TYPES = exports.PAYPAL_EXCEPTION_TYPES = exports.PAYPAL_ERROR_TYPES = exports.GOOGLE_PAY_TOTAL_PRICE_STATUS = exports.GOOGLE_PAY_ERROR_TYPES = exports.EXCEPTION_TYPES = exports.ERROR_TYPES = exports.BoolValue = exports.BTVenmoPaymntMethodUsage = exports.BTPayPalRequestUserAction = exports.BTPayPalCheckoutIntent = void 0;
let EXCEPTION_TYPES = exports.EXCEPTION_TYPES = /*#__PURE__*/function (EXCEPTION_TYPES) {
  EXCEPTION_TYPES["KOTLIN_EXCEPTION"] = "ExpoBraintree:`KotlinException";
  EXCEPTION_TYPES["USER_CANCEL_EXCEPTION"] = "ExpoBraintree:`UserCancelException";
  EXCEPTION_TYPES["TOKENIZE_EXCEPTION"] = "ExpoBraintree:`TokenizeException";
  return EXCEPTION_TYPES;
}({});
let PAYPAL_EXCEPTION_TYPES = exports.PAYPAL_EXCEPTION_TYPES = /*#__PURE__*/function (PAYPAL_EXCEPTION_TYPES) {
  PAYPAL_EXCEPTION_TYPES["PAYPAL_DISABLED_IN_CONFIGURATION"] = "ExpoBraintree:`Paypal disabled in configuration";
  return PAYPAL_EXCEPTION_TYPES;
}({});
let VENMO_EXCEPTION_TYPES = exports.VENMO_EXCEPTION_TYPES = /*#__PURE__*/function (VENMO_EXCEPTION_TYPES) {
  VENMO_EXCEPTION_TYPES["VENMO_DISABLED_IN_CONFIGURATION"] = "ExpoBraintree:`VENMO disabled in configuration";
  return VENMO_EXCEPTION_TYPES;
}({});
let GOOGLE_PAY_ERROR_TYPES = exports.GOOGLE_PAY_ERROR_TYPES = /*#__PURE__*/function (GOOGLE_PAY_ERROR_TYPES) {
  GOOGLE_PAY_ERROR_TYPES["GOOGLE_PAY_NOT_AVAILABLE"] = "GOOGLE_PAY_NOT_AVAILABLE";
  GOOGLE_PAY_ERROR_TYPES["GOOGLE_PAY_FAILED"] = "GOOGLE_PAY_FAILED";
  return GOOGLE_PAY_ERROR_TYPES;
}({});
let ERROR_TYPES = exports.ERROR_TYPES = /*#__PURE__*/function (ERROR_TYPES) {
  ERROR_TYPES["API_CLIENT_INITIALIZATION_ERROR"] = "API_CLIENT_INITIALIZATION_ERROR";
  ERROR_TYPES["TOKENIZE_VAULT_PAYMENT_ERROR"] = "TOKENIZE_VAULT_PAYMENT_ERROR";
  ERROR_TYPES["USER_CANCEL_TRANSACTION_ERROR"] = "USER_CANCEL_TRANSACTION_ERROR";
  ERROR_TYPES["DATA_COLLECTOR_ERROR"] = "DATA_COLLECTOR_ERROR";
  ERROR_TYPES["CARD_TOKENIZATION_ERROR"] = "CARD_TOKENIZATION_ERROR";
  return ERROR_TYPES;
}({});
let PAYPAL_ERROR_TYPES = exports.PAYPAL_ERROR_TYPES = /*#__PURE__*/function (PAYPAL_ERROR_TYPES) {
  PAYPAL_ERROR_TYPES["PAYPAL_DISABLED_IN_CONFIGURATION_ERROR"] = "PAYPAL_DISABLED_IN_CONFIGURATION_ERROR";
  return PAYPAL_ERROR_TYPES;
}({});
let VENMO_ERROR_TYPES = exports.VENMO_ERROR_TYPES = /*#__PURE__*/function (VENMO_ERROR_TYPES) {
  VENMO_ERROR_TYPES["VENMO_DISABLED_IN_CONFIGURATION"] = "VENMO_DISABLED_IN_CONFIGURATION_ERROR";
  return VENMO_ERROR_TYPES;
}({});
let THREE_D_SECURE_ERROR_TYPES = exports.THREE_D_SECURE_ERROR_TYPES = /*#__PURE__*/function (THREE_D_SECURE_ERROR_TYPES) {
  THREE_D_SECURE_ERROR_TYPES["D_SECURE_NOT_ABLE_TO_SHIFT_LIABILITY"] = "D_SECURE_NOT_ABLE_TO_SHIFT_LIABILITY";
  THREE_D_SECURE_ERROR_TYPES["D_SECURE_LIABILITY_NOT_SHIFTED"] = "D_SECURE_LIABILITY_NOT_SHIFTED";
  THREE_D_SECURE_ERROR_TYPES["PAYMENT_3D_SECURE_FAILED"] = "PAYMENT_3D_SECURE_FAILED";
  return THREE_D_SECURE_ERROR_TYPES;
}({});
let BTPayPalCheckoutIntent = exports.BTPayPalCheckoutIntent = /*#__PURE__*/function (BTPayPalCheckoutIntent) {
  BTPayPalCheckoutIntent["authorize"] = "authorize";
  BTPayPalCheckoutIntent["order"] = "order";
  BTPayPalCheckoutIntent["sale"] = "sale";
  return BTPayPalCheckoutIntent;
}({});
let BTPayPalRequestUserAction = exports.BTPayPalRequestUserAction = /*#__PURE__*/function (BTPayPalRequestUserAction) {
  BTPayPalRequestUserAction["none"] = "none";
  BTPayPalRequestUserAction["payNow"] = "payNow";
  return BTPayPalRequestUserAction;
}({});
let BoolValue = exports.BoolValue = /*#__PURE__*/function (BoolValue) {
  BoolValue["true"] = "true";
  BoolValue["false"] = "false";
  return BoolValue;
}({});
let BTVenmoPaymntMethodUsage = exports.BTVenmoPaymntMethodUsage = /*#__PURE__*/function (BTVenmoPaymntMethodUsage) {
  BTVenmoPaymntMethodUsage["multiUse"] = "multiUse";
  BTVenmoPaymntMethodUsage["singleUse"] = "singleUse";
  return BTVenmoPaymntMethodUsage;
}({});
let GOOGLE_PAY_TOTAL_PRICE_STATUS = exports.GOOGLE_PAY_TOTAL_PRICE_STATUS = /*#__PURE__*/function (GOOGLE_PAY_TOTAL_PRICE_STATUS) {
  /** The total price is an estimated price and might still change (maps to 1 in Kotlin) */
  GOOGLE_PAY_TOTAL_PRICE_STATUS[GOOGLE_PAY_TOTAL_PRICE_STATUS["ESTIMATED"] = 1] = "ESTIMATED";
  /** The total price is the final price and will not change (maps to 3/else in Kotlin) */
  GOOGLE_PAY_TOTAL_PRICE_STATUS[GOOGLE_PAY_TOTAL_PRICE_STATUS["FINAL"] = 3] = "FINAL";
  return GOOGLE_PAY_TOTAL_PRICE_STATUS;
}({});
//# sourceMappingURL=types.js.map