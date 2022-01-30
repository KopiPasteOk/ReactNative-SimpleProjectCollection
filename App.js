import React from 'react';
import type { Node } from 'react';
import {
  Dimensions,
  Text
} from 'react-native';

import { WebView } from 'react-native-webview';


const App: () => Node = () => {
  return (
    <>
      <Text style={{textAlign: 'center', fontSize: 20}}>Dacast Player</Text>
      <WebView
        source={{ uri: 'https://agitated-chandrasekhar-e6ed92.netlify.app' }}
        style={{
          width: Dimensions.get('window').width,
          flex: 1
        }}
        onMessage={(event) => {
          alert(event.nativeEvent.data);
        }}
      />
    </>
  );
};

export default App;
