import React, { useRef } from "react";
import { Easing, Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";

const App = () => {
  const fadeAnim = useRef(new Animated.Value(70)).current;



  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 200,
      duration: 5000,
      easing: Easing.bounce,
      useNativeDriver: false 
    }).start();
  };

  const iterPlt = fadeAnim.interpolate({
    inputRange: [70, 200],
    outputRange: ['rgb(222,1,1)', 'rgb(1,100,222)']

  })

  return (
    <SafeAreaView style={[styles.container]}>

      <Animated.View
        style={[styles.fadingContainer, 
        { backgroundColor: iterPlt, height:fadeAnim}]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>

      <View style={styles.buttonRow}>
        <Button title="hidden" onPress={fadeOut} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    justifyContent:'center'
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