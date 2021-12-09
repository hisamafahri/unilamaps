import React, { ReactElement } from 'react';
import { WebView } from 'react-native-webview';

export default function WebViewPage({ route }: any): ReactElement {
  const link = route.params.link;
  return <WebView source={{ uri: link }} />
}
