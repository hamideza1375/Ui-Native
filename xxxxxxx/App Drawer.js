import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Drawer from './zzzzzzz/Drawer'
import MaskedView from './zzzzzzz/MaskedView'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <Drawer route2={[
        { id: '1', key: '1', title: 'Home', onPress: () => console.log(1) },
        { id: '2', key: '2', title: 'Course', onPress: () => console.log(2) },
        { id: '3', key: '3', title: 'Login', onPress: () => console.log(3) },
        { id: '4', key: '4', title: 'Archive', onPress: () => console.log(4) }
      ]} >
        <View style={{ flex: 1}}>

          <MaskedView source={require("./a12.jpg")} >
            <Text style={{fontSize:60}} > Basic Mask </Text>
          </MaskedView>

        </View>
      </Drawer>
    </SafeAreaView>
  );
};


export default App;