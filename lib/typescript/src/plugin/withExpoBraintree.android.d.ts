import { AndroidConfig, type ConfigPlugin } from '@expo/config-plugins';
import { type MergeResults } from '@expo/config-plugins/build/utils/generateCode';
interface WithExpoBraintreeAndroidProps {
    host: string;
    pathPrefix?: string;
    initialize3DSecure?: 'true' | 'false';
    initializeGooglePay?: 'true' | 'false';
    addFallbackUrlScheme?: 'true' | 'false';
}
export declare const withExpoBraintreeAndroid: ConfigPlugin<WithExpoBraintreeAndroidProps>;
export declare const addBraintreeLinks: (modResults: AndroidConfig.Manifest.AndroidManifest, host: string, pathPrefix?: string, addFallbackUrlScheme?: "true" | "false", initialize3DSecure?: "true" | "false") => AndroidConfig.Manifest.AndroidManifest;
export declare const withExpoBraintreeAndroidGradle: ConfigPlugin;
export declare const appendContents: ({ src, newSrc, tag, comment, }: {
    src: string;
    newSrc: string;
    tag: string;
    comment: string;
}) => MergeResults;
export {};
//# sourceMappingURL=withExpoBraintree.android.d.ts.map