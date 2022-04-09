import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


function Button(prop) {
  const { outline, bgcolor, color, children, border, style } = prop

  return (
    !outline ?
      <TouchableOpacity onPress={prop.onPress}
        {...prop}
        style={[
          {
            backgroundColor: (bgcolor == 'red') && '#f33' ||
              (!bgcolor) && '#0091EA' ||
              (bgcolor == 'blue') && '#22f' ||
              (bgcolor == 'green') && '#292' ||
              (bgcolor == 'yellow') && '#fc3' ||
              (bgcolor == 'black') && '#555' ||
              bgcolor
            ,
          }, styles.touchopacity,
          !color && (bgcolor == 'white' ? { color: '#555' } : { color: 'white' }) ||
          { color: color }, bgcolor == 'white' ? { borderWidth: 1 } :
            { borderColor: !border && ((!bgcolor) ? '#0091EA' : bgcolor) || border },
          { ...style }]}>
        <Text
          style={[
            {
              backgroundColor: (bgcolor == 'red') && '#f33' ||
                (!bgcolor) && '#0091EA' ||
                (bgcolor == 'blue') && '#22f' ||
                (bgcolor == 'green') && '#292' ||
                (bgcolor == 'yellow') && '#fc3' ||
                (bgcolor == 'black') && '#555' ||
                bgcolor
            },
            styles.textButton,
            !color && (bgcolor == 'white' ? { color: '#555' } : { color: 'white' }) ||
            { color: color },
            , bgcolor == 'white' ? { borderWidth: 1 } :
              {
                borderColor:
                  !border && ((!bgcolor) ? '#0091EA' : bgcolor) || border
              },]} >{children}</Text>

      </TouchableOpacity>
      :
      <TouchableOpacity
        style={[
          styles.textOutline
          , bgcolor == 'white' ? { borderWidth: 1 } :
            {
              borderColor: !border && (bgcolor == 'yellow' && '#fc3' || bgcolor || '#3399ff')
                || border
            }, { ...style },
          { ...style }]}
        onPress={prop.onPress}>
        <Text style={color &&
          { color: color } ||
          !color && bgcolor &&
          { color: bgcolor } ||
          { color: '#3399ff' }} >
          {children}
        </Text>

      </TouchableOpacity>
  )
}

export default Button;
const styles = StyleSheet.create({
  textOutline: {
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    textAlign: 'center',
    height: 45,

  },
  textButton: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  touchopacity: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: 45,
    fontSize: 16,
    textAlign: 'center',
  },
})