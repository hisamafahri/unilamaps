import React, { ReactElement } from 'react';
import { WebView } from 'react-native-webview';

export default function TermsAndConditions({ }: any): ReactElement {
  return <WebView source={{ uri: 'https://lunar-infinity-ed6.notion.site/End-User-License-Agreement-2e4d19db91744880b22d55b30128f79b' }} />
}
