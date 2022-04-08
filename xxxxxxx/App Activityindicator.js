import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Loading from './zzzzzzz/Loading'
import Button from './zzzzzzz/Button'



function App() {


  return (
    <SafeAreaView>
      <View style={{ marginTop: 99 }} >
        <View style={{ position: 'relative' }} >
          <Loading size={11} color={"red"} style={{margin:4}} />
          <Button style={{ width: 80, alignSelf: 'center' }} >click</Button>
        </View>
      </View>
    </SafeAreaView>
  )
}



export default App;