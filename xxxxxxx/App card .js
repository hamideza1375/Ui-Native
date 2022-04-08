import React from 'react';
import { SafeAreaView, Text, I18nManager,View } from 'react-native';
import RNRestart from 'react-native-restart';
import Card from './zzzzzzz/Card'

I18nManager.forceRTL(true)
I18nManager.allowRTL(false)

if (I18nManager.isRTL === false) {
  RNRestart.Restart()
}

function App() {

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white',marginTop:80}} >
     <Card
        header={'salam salam'}
        body={'salam salam'}
        footer={<View style={{width:'100%', minWidth:'100%',alignItems:'center'}} ><Text>salam salam salam</Text></View>}
        img={require('./a12.jpg')}
     />
  
    </SafeAreaView>
  )
}



export default App;