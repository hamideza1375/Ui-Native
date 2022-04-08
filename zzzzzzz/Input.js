import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';




function Input(prop) {

  return (
    <View style={[{
      borderWidth: .3,flexDirection: 'row',
      position: 'relative', height: 51, borderRadius: 5,
      backgroundColor: '#fff',
    }, { ...prop.style }]} >


      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        {...prop}
        placeholder={prop.p}
        style={[{
          color: prop.color ? prop.color : '#222',
          textAlign: "right", width: '84.3%', fontSize: 15, padding: 6,
          height: '100%', minWidth: '84.3%', position: 'absolute', left: 1
        }]} />

      {prop.icon && 
      <View style={{ 
      width: '15%',textAlign: 'center', position: 'absolute',
      right: 1, borderLeftWidth: .3,height:'100%',justifyContent:'center',
      alignItems:'center'}} >
      <Icon name={prop.icon} size={prop.iconSize ? prop.iconSize : 22} color={prop.iconColor ? prop.iconColor : "#666"}
        style={{

        }} />
        </View>
        }

    </View>
  )
}



export default Input;