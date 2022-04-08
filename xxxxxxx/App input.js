import React from 'react';
import { View, SafeAreaView, I18nManager } from 'react-native';
import Input from './zzzzzzz/Input';



import RNRestart from 'react-native-restart';

I18nManager.forceRTL(true)
I18nManager.allowRTL(false)

if (I18nManager.isRTL === false) {
  RNRestart.Restart()
}


function App() {

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Input placeholder="fullname" icon={'eye'} iconSize={20} 
      color='silver' iconColor='silver'
        style={{ backgroundColor: 'white', height: 40, width: 200 }} />
    </SafeAreaView>
  )
}



export default App;