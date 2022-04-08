import React from 'react';
import { SafeAreaView, View, Text, I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import List from './zzzzzzz/List'
import Button from './zzzzzzz/Button'

I18nManager.forceRTL(true)
I18nManager.allowRTL(false)

if (I18nManager.isRTL === false) {
  RNRestart.Restart()
}

function App() {

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'white',marginTop:80}} >
      <List icon='download' icon2='youtube' header="سلام" body="سلام" />
      <List icon='download' icon2='address-card' header="سلام" body="سلام" />
      <List icon='download' icon2='envelope' header="سلام" body="سلام" />
      <List icon='download' icon2='phone' header="سلام" body="سلام"  />
      <Button icon='download' icon2='phone' header="سلام" body="سلام" >clicl</Button>
    </SafeAreaView>
  )
}



export default App;