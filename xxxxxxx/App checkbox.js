import React, {useState} from 'react';
import { View } from 'react-native';
import Checkbox from './zzzzzzz/Checkbox';



function App() {
  const [show, setShow] = useState(true)


  return (
      <View style={{ flex:1,margin:100,backgroundColor: 'silver', alignItems:'center', justifyContent:'center' }} >
        <Checkbox show={show} setShow={setShow} style={{ margin: 4 }} />
      </View>
  )
}



export default App;