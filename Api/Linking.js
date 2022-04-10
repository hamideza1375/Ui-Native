import React, { useCallback } from "react";
import { Button, Linking, StyleSheet, View } from "react-native";
const supportedURL = "https://google.com";


const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
      await Linking.openURL(url);
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};


const App = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default App;