import React, { useRef, useEffect } from "react";
import { Easing, Animated, Text, View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import Button from './zzzzzzz/Button'


const App = () => {
  useEffect(() => {
    console.disableYellowBox = true
  }, [])


  const { width, height } = Dimensions.get("window")


  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;


  const fadeOut = () => {
    Animated.sequence([

      Animated.timing(fadeAnim1, {
        toValue: 1000,
        duration: 1500,
        easing: Easing.bounce,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1000,
        duration: 1500,
        easing: Easing.bounce,
      }),
      Animated.timing(fadeAnim3, {
        toValue: 1000,
        duration: 1500,
        easing: Easing.bounce,
      }),

    ]).start()

  };




  return (
    <SafeAreaView style={[styles.container]}>

        <Animated.View style={[styles.fadingContainer1,{ height: fadeAnim1, }]}></Animated.View>

        <Animated.View style={[styles.fadingContainer2,{ height: fadeAnim2, }]}></Animated.View>

        <Animated.View style={[styles.fadingContainer3,{ height: fadeAnim3, }]}></Animated.View>

      <Button title="hidden" onPress={fadeOut} style={styles.btn} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    position:'absolute',
    top: '95%',
    left: -215,
  },

  container: {
    flexDirection: 'row',
    flex: 1,
    flexBasis:'100%'
  },
  fadingContainer1: {
    padding: 20,
    backgroundColor: "powderblue",
    marginLeft: 20,
    width:100
  },
  fadingContainer2: {
    padding: 20,
    backgroundColor: "powderblue",
    marginHorizontal: 10,
    marginLeft: 'auto',
    width:100
  },
  fadingContainer3: {
    padding: 20,
    backgroundColor: "powderblue",
    marginLeft: 'auto',
    width:100,
    marginRight: 8.5,
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