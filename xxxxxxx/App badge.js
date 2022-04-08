import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Badge from './zzzzzzz/Badge'
import Button from './zzzzzzz/Button'



function App() {



  return (
    <SafeAreaView>

      <View style={{ marginTop: 99 }} >
        <View style={{ position: 'relative' }} >
          <Badge top={-5} left={148} text={"2"} />
          <Button style={{ width: 80, alignSelf: 'center' }} >click</Button>
        </View>
      </View>

    </SafeAreaView>
  )
}



export default App;