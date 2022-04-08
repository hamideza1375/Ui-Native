import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


export const Thead = (prop) => {
  return (
    <View {...prop} style={[styles.table, {height: 40},prop.TheadStyle]} >
      <Text> {prop.children}</Text>
    </View>
  )
}

export const Tbody = (prop) => {
  return (
    <View style={[styles.table,{fontWeight:'300'}, prop.TbodyStyle]} >
      <Text> {prop.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  table: {
    height: 50,
    width: '25%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: .4,
    textAlign: 'center',
    fontWeight: '800',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1.5
  },

});


