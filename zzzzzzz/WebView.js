import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';


const App = () => {


  return (
    <SafeAreaView style={{ width: '100%', height: '100%', }}>

      <WebView
        source={require('./Local_Website/SampleHtmlFile.html')}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />

    </SafeAreaView>
  );
};




export default App;
