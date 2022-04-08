import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


function Button(prop) {
  return (
    !prop.outline ?
      <TouchableOpacity
        style={[
          {
            backgroundColor: (prop.bgcolor == 'red') && '#f33' ||
              (!prop.bgcolor) && '#0091EA' ||
              (prop.bgcolor == 'blue') && '#22f' ||
              (prop.bgcolor == 'green') && '#292' ||
              (prop.bgcolor == 'yellow') && '#fc3' ||
              (prop.bgcolor == 'black') && '#555' ||
              prop.bgcolor
            ,
            justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5
          }
          , prop.bgcolor == 'white' ? { borderWidth: 1 } :
            {
              borderColor:
                !prop.border && ((!prop.bgcolor) ? '#0091EA' : prop.bgcolor) || prop.border
            }, { ...prop.style }]}>


        <Text onPress={prop.onClick}
          style={[{
            fontSize: 16, textAlign: 'center', paddingVertical: 16,
            paddingHorizontal: 18,
          },
          !prop.color && (prop.bgcolor == 'white' ? { color: '#555' } :
            { color: 'white' }) ||
          { color: prop.color }, { ...prop.style }]} >{prop.children}</Text>


      </TouchableOpacity>

      :

      <TouchableOpacity
        style={[
          { backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5 }
          , prop.bgcolor == 'white' ? { borderWidth: 1 } :
            { borderColor: !prop.border && (prop.bgcolor == 'yellow' && '#fc3' || prop.bgcolor || '#3399ff') || prop.border }, { ...prop.style }]}>
        <Text onPress={prop.onClick} style={[{ fontSize: 16, textAlign: 'center', paddingVertical: 16, paddingHorizontal: 18, },

        prop.color &&
        { color: prop.color } ||
        !prop.color && prop.bgcolor &&
        { color: prop.bgcolor } ||
        { color: '#3399ff' },
        { ...prop.style }]} >{prop.children}</Text>

      </TouchableOpacity>
  )
}

export default Button;