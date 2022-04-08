import React from "react";
import { ActivityIndicator } from "react-native";

const App = ({ size, color, style }) => (
    <ActivityIndicator style={{...style}}
    size={size ? size : 11} color={color ? color : "silver"} />
);


export default App;