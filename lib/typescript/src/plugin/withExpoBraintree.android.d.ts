import { AndroidConfig, type ConfigPlugin } from '@expo/config-plugins';
import { type MergeResults } from '@expo/config-plugins/build/utils/generateCode';
interface IntentFilterProps {
    host: string;
    pathPrefix?: string;
    initializePayPal?: string;
    initializeVenmo?: string;
    initialize3DSecure?: string;
}
export declare const withExpoBraintreeAndroid: ConfigPlugin<IntentFilterProps>;
export declare const addPaypalAppLinks: (modResults: AndroidConfig.Manifest.AndroidManifest, host: string, pathPrefix?: string) => AndroidConfig.Manifest.AndroidManifest;
export declare const withExpoBraintreeAndroidGradle: ConfigPlugin;
export declare const appendContents: ({ src, newSrc, tag, comment, }: {
    src: string;
    newSrc: string;
    tag: string;
    comment: string;
}) => MergeResults;
export {};
//# sourceMappingURL=withExpoBraintree.android.d.ts.map