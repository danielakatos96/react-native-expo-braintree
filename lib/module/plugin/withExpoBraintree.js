"use strict";

import { createRunOncePlugin } from '@expo/config-plugins';
import { withExpoBraintreeAndroid, withExpoBraintreeAndroidGradle } from './withExpoBraintree.android';
import { withExpoBraintreePlist, withVenmoScheme, withExpoBraintreeAppDelegate, withBraintreeWrapperFile } from './withExpoBraintree.ios';
const pkg = require('react-native-expo-braintree/package.json');
export const withExpoBraintreePlugin = (expoConfig, props) => {
  // Android mods
  let config = withExpoBraintreeAndroid(expoConfig, props);
  if (props?.initialize3DSecure === 'true') {
    config = withExpoBraintreeAndroidGradle(config);
  }
  // IOS mods
  config = withExpoBraintreeAppDelegate(config, props);
  config = withBraintreeWrapperFile(config, {
    appDelegateLanguage: props?.appDelegateLanguage || 'swift'
  });
  config = withExpoBraintreePlist(config);
  config = withVenmoScheme(config);
  return config;
};
export default createRunOncePlugin(withExpoBraintreePlugin, pkg.name, pkg.version);
//# sourceMappingURL=withExpoBraintree.js.map