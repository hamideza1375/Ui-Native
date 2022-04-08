import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


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
          justifyContent: 'center', alignItems: 'center',
           borderWidth: 1, borderRadius: 5,
        },
        { fontSize: 16, textAlign: 'center',},
        !color && (bgcolor == 'white' ? { color: '#555' } : { color: 'white' }) ||
        { color: color },
        , bgcolor == 'white' ? { borderWidth: 1 } :
          {
            borderColor:
              !border && ((!bgcolor) ? '#0091EA' : bgcolor) || border
          },
        { ...style }]}
      >

        <Text
          // {...prop}
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
              justifyContent: 'center', alignItems: 'center', borderRadius: 5,
            },
            { fontSize: 16, textAlign: 'center' },
            !color && (bgcolor == 'white' ? { color: '#555' } : { color: 'white' }) ||
            { color: color },
            , bgcolor == 'white' ? { borderWidth: 1 } :
              {
                borderColor:
                  !border && ((!bgcolor) ? '#0091EA' : bgcolor) || border
              },]} >{children}</Text>

      </TouchableOpacity>

      :


      <TouchableOpacity onPress={prop.onPress}>

        <Text
          
          // {...prop}

          style={[
            { backgroundColor: "white", justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5 }
            , bgcolor == 'white' ? { borderWidth: 1 } :
              { borderColor: !border && (bgcolor == 'yellow' && '#fc3' || bgcolor || '#3399ff') || border }, { ...style },
            {
              fontSize: 16, textAlign: 'center',
            },

            color &&
            { color: color } ||
            !color && bgcolor &&
            { color: bgcolor } ||
            { color: '#3399ff' },
            { ...style }]} >
          {children}
        </Text>

      </TouchableOpacity>
  )
}

export default Button;