import React from 'react';
import { View, TextInput,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


function Input(prop) {
  return (
    <View style={[styles.container, prop.style ]} >
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        spellCheck={true}
        {...prop}
        placeholder={prop.p}
        style={[styles.input,{color: prop.color ? prop.color : '#222',}]} />
      {prop.icon && 
      <View style={styles.ViewIcon} >
      <Icon onPress={prop.iconPress} name={prop.icon} size={prop.iconSize ? prop.iconSize : 22} color={prop.iconColor ? prop.iconColor : "#666"}/>
        </View>
        }
    </View>
  )
}



export default Input;
const styles = StyleSheet.create({
  ViewIcon: {
    width: '15%',
    textAlign: 'center',
    position: 'absolute',
    right: 1,
    borderLeftWidth: .3,
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  input: {
    textAlign: "right",
    width: '84.3%',
    fontSize: 15,
    padding: 6,
    height: '100%',
    minWidth: '84.3%',
    position: 'absolute',
    left: 1,
  },
  container: {
    borderWidth: .3,
    flexDirection: 'row',
    position: 'relative',
    height: 51,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
})