import React from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import Swiper from "./zzzzzzz/Swiper";



const App = () => {

  return (
    <SafeAreaView>
      <Swiper icon={<Text style={{ color: 'white', backgroundColor: 'red', padding: 7 }}>del</Text>}>
        <TextInput style={{ width: 200, height: 50, borderWidth: 1, backgroundColor: '#fff' }} />
      </Swiper>
    </SafeAreaView>
  )


}

export default App