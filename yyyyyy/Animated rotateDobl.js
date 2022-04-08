import React, { useRef, useEffect, useState } from "react";
import { Animated, StyleSheet, SafeAreaView,Text } from "react-native";
import Button from './zzzzzzz/Button'


const App = () => {

  const [showX, setShowX] = useState(true)
  const [showY, setShowY] = useState(true)

  useEffect(() => {
    console.disableYellowBox = true
  }, [])


  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const iterPlt1 = fadeAnim1.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  })

  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const iterPlt2 = fadeAnim2.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  })


  const fadeOutY = () => {
    if (showY)
      Animated.timing(fadeAnim1, {
        toValue: 360,
        duration: 2000,
      }).start()
    else Animated.timing(fadeAnim1, {
      toValue: 0,
      duration: 2000,
    }).start()
  };


  const fadeOutX = () => {
    if (showX)
      Animated.timing(fadeAnim2, {
        toValue: 360,
        duration: 2000,
      }).start()
    else Animated.timing(fadeAnim2, {
      toValue: 0,
      duration: 2000,
    }).start()
  };



  return (
    <SafeAreaView style={[styles.container]}>
      <Animated.View style={[styles.fadingContainer, { transform: [{ rotateX: iterPlt1 }, { rotateY: iterPlt2 }] }]}>
        <Text style={{alignSelf:'center', fontSize:22}} >hello akbar</Text>
      </Animated.View>
      <Button title="hidden" onPress={() => { setShowY(!showY); fadeOutY() }} style={styles.btn} />
      <Button title="hidden" onPress={() => { setShowX(!showX); fadeOutX() }} style={styles.btn2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    top: '95%',
    // left: 3,
    // alignSelf:'center'
  },
  btn2: {
    position: 'absolute',
    top: '95%',
    left: -237,
    // alignSelf:'center'
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    flexBasis: '100%',
    justifyContent: 'center',
  },
  fadingContainer: {
    backgroundColor: "orange",
    alignSelf: 'center',
    width: 200,
    height: 200,
    justifyContent:'center'
  },
  fadingContainer2: {
    padding: 20,
    backgroundColor: "powderblue",
    marginRight: 8,
    marginLeft: 'auto',
    width: 200,
    height: 200,
  },
  fadingText: {
    textAlign: 'center',
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default App;