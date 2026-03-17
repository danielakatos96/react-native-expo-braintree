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
     * Set this flag to true if you need to use requestVenmoNonce which will be using fallbackUrlScheme
     * It will also add an intent-filter if it is not added before
     *  <intent-filter>
     *     <action android:name="android.intent.action.VIEW" />
     *     <category android:name="android.intent.category.DEFAULT" />
     *     <category android:name="android.intent.category.BROWSABLE" />
     *     <data android:scheme="${applicationId}.braintree" />
     *  </intent-filter>
     */
    addFallbackUrlScheme?: 'true' | 'false';
    /**
     * Flag that determines if we should initialize 3ds secure flow
     * It will also add an intent-filter if it is not added before
     *  <intent-filter>
     *     <action android:name="android.intent.action.VIEW" />
     *     <category android:name="android.intent.category.DEFAULT" />
     *     <category android:name="android.intent.category.BROWSABLE" />
     *     <data android:scheme="${applicationId}.braintree" />
     *  </intent-filter>
     */
    initialize3DSecure?: 'true' | 'false';
    /**
     * Flag that determines if we should initialize Google Pay
     */
    initializeGooglePay?: 'true' | 'false';
};
export declare const withExpoBraintreePlugin: ConfigPlugin<ExpoBraintreePluginProps>;
declare const _default: ConfigPlugin<ExpoBraintreePluginProps>;
export default _default;
//# sourceMappingURL=withExpoBraintree.d.ts.map