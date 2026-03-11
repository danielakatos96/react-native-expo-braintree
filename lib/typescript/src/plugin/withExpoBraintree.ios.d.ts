import { type ConfigPlugin, type ExportedConfigWithProps } from '@expo/config-plugins';
import type { ExpoBraintreePluginProps } from './withExpoBraintree';
import type { AppDelegateProjectFile } from '@expo/config-plugins/build/ios/Paths';
export type AppleLanguage = 'objc' | 'objcpp' | 'swift' | 'rb';
export declare const withExpoBraintreePlist: ConfigPlugin;
export declare const withVenmoScheme: ConfigPlugin;
/**
 * Mods for AppDelegate.swift React Native above 0.77.x and Expo above 53
 */
export declare const modifyAppDelegateSwift: (config: ExportedConfigWithProps<AppDelegateProjectFile>) => string[];
/**
 * Mods for AppDelegate.swift
 */
/**
 * Mods for AppDelegate.mm / AppDelegate.m React Native below 0.77.x and Expo below 53
 */
export declare const modifyAppDelegateObjectiveC: (config: ExportedConfigWithProps<AppDelegateProjectFile>, xCodeProjectAppName?: string) => string[];
/**
 * Mods for AppDelegate.mm
 */
export declare const withExpoBraintreeAppDelegate: ConfigPlugin<ExpoBraintreePluginProps>;
export declare const withBraintreeWrapperFile: ConfigPlugin<{
    appDelegateLanguage: AppleLanguage | null;
}>;
//# sourceMappingURL=withExpoBraintree.ios.d.ts.map