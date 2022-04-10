import React, { useState, useEffect } from "react";
import { Animated, InteractionManager, Platform, StyleSheet, Text, View } from "react-native";


const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu"
});

const useMount = (func) => (
  useEffect(() => (
    func()
  ), [])
)

const useFadeIn = (opacity) => {
  useMount(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration:5000,
    }).start();
  });

  return opacity;
};


const App = () => {
  const [opacity2] = useState(new Animated.Value(0));

  const opacity = useFadeIn(opacity2);
  useMount(() => {
    const interactionPromise = InteractionManager.runAfterInteractions(() => alert(11));
    return () => interactionPromise.cancel();
  });

  return (
    <View style={styles.container}>
      <Text>{instructions}</Text>
      <Animated.View style={[styles.ball, { opacity }]} />
    </View>
  )
};





const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  ball: {
    width: 100,
    height: 100,
    backgroundColor: "salmon",
    borderRadius: 100,
  },
});

export default App;