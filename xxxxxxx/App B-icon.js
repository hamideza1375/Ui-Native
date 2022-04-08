import React from 'react'
import { SafeAreaView, View } from 'react-native'
import B_icon from './zzzzzzz/B_icon'


const App = () => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row' }}>
        <B_icon icon='youtube' />
        <B_icon color="silver" bgcolor="red" scale={1.1} size={29} icon='youtube' />
      </View>
    </SafeAreaView>
  )
}

export default App