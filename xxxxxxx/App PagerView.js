import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import MaskedView from './zzzzzzz/MaskedView'


const App = () => {
  return (
    <View style={{ flex: 1 }} >
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        orientation={"horizontal"}
        scrollEnabled={true}
        layoutDirection="rtl"
        set
      >
        <View key="1">
          <Text
            style={{
              position: "absolute", top: 420, right: 190, zIndex: 3,
              transform: [{ rotate: "90deg" }],
              color: 'green', fontSize: 55, fontWeight: '600'
            }}>salam salam</Text>
          <Image source={require("./a12.jpg")} style={{ width: "100%", height: "99%" }} />
        </View>

        <View key="2">
          <Text
            style={{
              position: "absolute", top: 420, right: 190, zIndex: 3,
              transform: [{ rotate: "90deg" }],
              color: 'green', fontSize: 55, fontWeight: '600'
            }}>salam salam</Text>
          <Image source={require("./a12.jpg")} style={{ width: "100%", height: "99%" }} />
        </View>

        <View key="3">
          <Text
            style={{
              position: "absolute", top: 420, right: 190, zIndex: 3,
              transform: [{ rotate: "90deg" }],
              color: 'green', fontSize: 55, fontWeight: '600'
            }}>salam salam</Text>
          <Image source={require("./a12.jpg")} style={{ width: "100%", height: "99%" }} />
        </View>
      </PagerView>

      <MaskedView
       style={{flex:.25}}
        source={require("./a12.jpg")} >
        <Text style={{fontSize:70, fontWeight:'700'}} > Music </Text>
      </MaskedView>
    </View>
  );
};


const styles = StyleSheet.create({
  pagerView: {
    flex: .75,
    flexDirection: 'row',
    justifyContent: "center"
  },
});



export default App