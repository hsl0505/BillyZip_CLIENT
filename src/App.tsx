import React from 'react';
import { YellowBox } from 'react-native';
import AuthValideScreen from './screens/AuthValid/AuthValidScreen';

console.ignoredYellowBox = ['Remote debugger'];
// import TabNav from './screens/TabNav';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
]);

function App(): JSX.Element {
  return <AuthValideScreen />;
}

export default App;
