import React, { useRef } from 'react'
import { Dimensions, Easing, View, Text, StyleSheet, Animated, Button, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const width = Dimensions.get('window').width;
const Drawer = ({ route2, children }) => {

  const fadeAnim = useRef(new Animated.Value(-1000)).current;



  const open = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 800,
      easing: Easing.cubic,
      useNativeDriver: false
    }).start();
  };

  const close = () => {
    Animated.timing(fadeAnim, {
      toValue: -1000,
      duration: 1000,
      useNativeDriver: false
    }).start();
  };

  const hidden = fadeAnim.interpolate({
    inputRange: [-1000, 0],
    outputRange: [0, 1]
  })

  return (
    <View style={styles.container} >
      <View style={styles.sidebar} >
        <Text style={styles.TextHeader}>Drawer</Text>
        <Icon onPress={open} name={'bars'} color={'#777'} size={28} style={styles.icon} />
      </View>

      <View style={{ flex: 1 }} >
        {children}
      </View>

      <Animated.View style={[styles.container2,
      { transform: [{ translateX: fadeAnim }], opacity: hidden }]} >
        <Pressable onPress={close} style={styles.pressable} />
        <Animated.View style={styles.viewDriver} >
          {route2.map((r, key) => (
            <View key={key} style={styles.routeView} >
              <Pressable
                onPressIn={r.onPress}
                ref={(e) => r.id = e} onPress={() => {
                  let flt = route2.filter((rut) => rut.id != r.id)
                  r.id.setNativeProps({ style: { backgroundColor: '#ccf9', } })
                  r.key.setNativeProps({ style: { color: '#47f', } })
                  flt.map((f) => {
                    f.id.setNativeProps({ style: { backgroundColor: '#f5f5f5', } })
                    f.key.setNativeProps({ style: { color: '#777' } })
                  })
                }} style={styles.viewActive} >
                <Text style={styles.textActive}
                  ref={(e) => r.key = e}
                >{r.title}</Text>
              </Pressable>
            </View>
          ))}
        </Animated.View>


      </Animated.View>


    </View>
  )
}
{/* shirt + alt + t */ }

import styled from 'styled-components/native'


const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  TextHeader: {
    marginLeft: 'auto',
    alignSelf: 'center',
    fontSize: 19,
    color: '#555',
    paddingBottom: 4,
    marginRight: -40,
  },
  sidebar: {
    flexDirection: 'row',
    paddingRight: 10,
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: .4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 2,
      borderRadius: 6,
    },
  },
  textActive: {
    fontSize: 18,
    color: '#777',
  },
  pressable: {
    backgroundColor: '#aaa5',
    position: 'relative',
    zIndex: 44,
    width: '50%',
    height: '100%',
    marginTop: -50,

  },
  routeView: {
    maxHeight: 60,
    minHeight: 55,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    borderRadius: 6

  },
  viewActive: {
    backgroundColor: '#f5f5f5',
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    borderRadius: 6,
    paddingRight: 8,

  },
  viewDriver: {
    right: 0,
    marginTop: -50,
    zIndex: 100,
    position: 'absolute',
    paddingTop: 65,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: "65%",
    height: '100%',
    backgroundColor: '#fff',
    borderWidth: .2,
    borderColor: '#999',
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: .7,
    shadowRadius: 7,
    shadowOffset: {
      width: 1,
      height: 2,
      borderRadius: 6,
    },
  },
  container: {
    backgroundColor: '#f5f5f5',
    position: 'relative',
    height: '100%'
  },
  container2: {
    backgroundColor: '#f5f5f5',
    position: 'absolute',
    flexDirection: 'row',
    height: '130%',
    backgroundColor: 'transparent',
    width: '100%'
  },

})

export default Drawer