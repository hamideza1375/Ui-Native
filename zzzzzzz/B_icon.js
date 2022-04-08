import React, { useRef } from 'react'
import { View, StyleSheet, Easing, Animated, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const B_icon = (prop) => {

    const { color, bgcolor, scale, size, icon } = prop

    const fadeAnim = useRef(new Animated.Value(70)).current;


    const fadeOut = () => {

        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 200,
                duration: 500,
                useNativeDriver: false,
                easing: Easing.bounce,

            }),
            Animated.timing(fadeAnim, {
                toValue: 70,
                duration: 500,
                useNativeDriver: false
            }),
        ]).start();

    };

    const iterPlt = fadeAnim.interpolate({
        inputRange: [70, 200],
        outputRange: ["transparent",

            bgcolor ?

                (bgcolor == 'red') && '#f995' ||
                (bgcolor == 'blue') && '#9cf5' ||
                (bgcolor == 'green') && '#1412' ||
                (bgcolor == 'yellow') && '#ff96' ||
                (bgcolor == 'black') && '#ccc5' ||
                'rgba(240,240,240,.6)'
                :
                'rgba(150,200,240,.5)'

        ]

    })


    return (
        <Animated.View style={[{ width: 80, height: 80, 
            borderRadius: 99,justifyContent:'center',alignItems:'center' }
            , { backgroundColor: iterPlt }]}>
            <Pressable
                style={{
                    borderWidth: 7, width: 57, height: 57, borderRadius: 99,
                    borderColor: bgcolor ?
                        (bgcolor == 'red') && '#e22' ||
                        (bgcolor == 'blue') && '#01c' ||
                        (bgcolor == 'green') && '#171' ||
                        (bgcolor == 'yellow') && '#f9c000' ||
                        (bgcolor == 'black') && '#393939' ||
                        bgcolor
                        : "#01c",
                    backgroundColor: bgcolor ?

                        (bgcolor == 'red') && '#f22' ||
                        (bgcolor == 'blue') && '#22f' ||
                        (bgcolor == 'green') && '#080' ||
                        (bgcolor == 'yellow') && '#fc0' ||
                        (bgcolor == 'black') && '#454545' ||
                        bgcolor
                        : "#02f",


                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: [{ scale: scale ? scale : 1 }]
                }}
                onResponderStart={fadeOut}
            // onPress={fadeOut} 
            >
                <Icon name={icon} color={color ? color : 'white'} size={size ? size : 28} />
            </Pressable>
        </Animated.View>
    )
}

export default B_icon





