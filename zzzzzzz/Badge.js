import React from 'react'
import { View, Text } from 'react-native'

const Badge = ({ color, text, top, left, right, bottom, style }) => {
    return (
        <View style={[{
            width: 15, height: 15,

            backgroundColor: color ?
                (color == 'red') && '#f33' ||
                (color == 'blue') && '#22f' ||
                (color == 'green') && '#292' ||
                (color == 'yellow') && '#fa3' ||
                (color == 'black') && '#555' ||
                color
                :
                "#f33"
            ,
            borderRadius: 90,
            justifyContent: 'center', alignItems: 'center',
            top: top, left: left, right: right,
             bottom: bottom, position: 'absolute', zIndex:10
        }, { ...style }]} >
            <Text style={{ color: 'white', fontSize: 12.6, fontWeight: '900' }} >
                {text}
            </Text>
        </View>
    )
}

export default Badge