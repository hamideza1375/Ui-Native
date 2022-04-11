import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet } from "react-native";


const App = (prop) => {

  const pan = useRef(new Animated.Value(0)).current;
  const [pan2, setPan2] = useState()

  pan.addListener(({value}) => setPan2(value));


  const fadeMax = () => {
    Animated.timing(pan, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  const fadeMin = () => {
    Animated.timing(pan, {
      toValue: -100,
      duration: 500,
      useNativeDriver: false
    }).start();
  };


  return (
    <View style={[styles.container, { padding: 5 }]}>
      <View>
        <View style={{ position: 'absolute', backgroundColor: ' red', top: 7, left: 5 }} >
          {prop.icon}
        </View>
        <Animated.View
          testID="1"
          onMoveShouldSetResponder={() => {
            (pan2 == 0) ? 
            fadeMin() 
            :
            fadeMax()
          }}
          style={[{ transform: [{ translateX: pan }] }]}>
          {prop.children}
        </Animated.View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white'
  }
});

export default App;