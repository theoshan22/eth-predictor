import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const initialHTMLContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="author" content="">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src='https://unpkg.com/rahulrsingh09-stenciltest2@0.0.3/dist/test/test.js'></script>
</head>
<body>
<h1>Hello</h1>
<iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/c1e3b11a-5682-4558-ba23-07a3109dbf34/page/kmofC" frameborder="0" style="border:0" allowfullscreen></iframe>
</body>
</html>`;
  return (

    
    <View
    style={{
      flex: 1,
    }}>
    <WebView
      originWhitelist={['*']}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      source={{
        html: initialHTMLContent,
        
      }}
    />
  </View>
   
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
