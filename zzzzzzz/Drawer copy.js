import React, { useRef } from 'react'
import { Easing, View, Text, StyleSheet, Animated, Button, Pressable } from 'react-native'



const Drawer = ({route2}) => {

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


  var myRef;

  return (
    <View onPress={close} style={styles.container} >
      <View>
        <Button title="open" onPress={open} />
      </View>


      <Animated.View onPress={close} style={[styles.container2,
      { transform: [{ translateX: fadeAnim }] }]} >

        <Pressable onPress={close} style={[
          {
            backgroundColor: '#cccf', position: 'relative',
            zIndex: 44,
            width: '50%', height: '100%', marginTop: -50
          }]} ></Pressable>

        <Animated.View style={[
          styles.viewDriver,

        ]} >



          {route2.map((r, key) => (
            <View key={key} style={styles.routeView} >
              <Text 
              
              // ref={(e) => r = e}

                // onPress={() => {
                //   key.setNativeProps({ style: 
                //     { color: '#47f', backgroundColor: '#ccf9', } })
                // }}


                onPress={(e) => {
                 (r.key == key) &&
                 e.target.setNativeProps({ style: 
                    { color: '#47f', backgroundColor: '#ccf9', } })
                }}


                style={[styles.viewActive, styles.textRoute]} >

                <Text>{r.t}</Text>
              </Text>
            </View>
          ))}
        </Animated.View>
      </Animated.View>

    </View>
  )
}

const styles = StyleSheet.create({
  routeView: {
    flex: 1,
    maxHeight: 55,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 6

  },
  viewActive: {
    backgroundColor: '#ccf6',
    backgroundColor: '#f5f5f5',
    width: '85%',
    height: '85%',
    justifyContent: 'center',
    borderRadius: 6,
    fontSize: 20,
    color: '#777',
    paddingRight: 10,
    paddingTop:11
  },
  viewDriver: {
    right: 0,
    marginTop: -50,
    zIndex: 100,
    position: 'absolute',
    paddingTop: 65,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: "60%",
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
    marginTop: -50,
    backgroundColor: '#f5f5f5',
    position: 'relative',
    flexDirection: 'row',
    height: '170%'

  },

})

export default Drawer