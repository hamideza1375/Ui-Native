import React, { useRef } from "react";
import { Easing, Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";

const App = () => {
  const fadeAnim = useRef(new Animated.Value(250)).current;



  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 150,
      duration: 5000,
      easing: Easing.bounce,
    }).start();
  };


  return (
    <SafeAreaView style={styles.container}>

      <Animated.View
        style={[styles.fadingContainer, { width: fadeAnim }]}>
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
    backgroundColor: "powderblue"
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