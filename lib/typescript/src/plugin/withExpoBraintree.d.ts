import { type ConfigPlugin } from '@expo/config-plugins';
import { type AppleLanguage } from './withExpoBraintree.ios';
export type ExpoBraintreePluginProps = {
    /**
     * xCode project name, used for importing the swift expo braintree config header
     */
    xCodeProjectAppName?: string;
    /**
     * Indicator that tell the plugin if you still use AppDelegate Objective C
     * Optional Default = "swift"
     */
    appDelegateLanguage?: AppleLanguage;
    /**
     * Android AppLink host
     */
    host: string;
    /**
     * Android AppLink pathPrefix
     */
    pathPrefix?: string;
    /**
     * Boolean that determines if PayPal is used/needed (Values "true" | "false")
     */
    initializePayPal?: string;
    /**
     * Boolean that determines if Venmo is used/needed (Values "true" | "false")
     */
    initializeVenmo?: string;
    /**
     * Boolean that determines if 3D Secure is used/needed (Values "true" | "false")
     */
    initialize3DSecure?: string;
};
export declare const withExpoBraintreePlugin: ConfigPlugin<ExpoBraintreePluginProps>;
declare const _default: ConfigPlugin<ExpoBraintreePluginProps>;
export default _default;
//# sourceMappingURL=withExpoBraintree.d.ts.map