import React, { useState } from "react";
import { LayoutAnimation, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default function App({style, header, body, color, bgcolor, icon, icon2,size }) {

  const [show, setShow] = useState(false)





  return (
    <>
      <TouchableOpacity
        onPress={() => { setShow(!show); }} activeOpacity={0.8}
        style={[styles.headView,
        {
          backgroundColor:
            !bgcolor && "#0091EA" ||
            bgcolor == "blue" && "#22f" ||
            bgcolor == "red" && "#f33" ||
            bgcolor == "green" && "#292" ||
            bgcolor == "silver" && "#999" ||
            bgcolor == "black" && "#555" ||
            bgcolor == "yellow" && "orange" ||
            bgcolor && bgcolor
        }
        ,{borderRadius:3},{ ...style }]}>
        <Text style={[styles.headText, { color: color && color || 'white' },{fontSize:size?size:22.5}]}>{header}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', width:105}}>
          {icon2 && <Icon name={icon2} color={ color && color || 'white' } size={size?size:24} style={styles.headText} />}
          {icon && <Icon name={icon} color={ color && color || 'white' } size={size?size:24} style={styles.headText} />}
        </View>
      </TouchableOpacity>
      <View style={{ height: show ? null : 0, overflow: "hidden" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.subView}>
          <Text style={styles.subText}>
            {body}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}




const styles = StyleSheet.create({
  subView: {
    padding: 5,
    width: "100%",
    borderBottomWidth: .4
  },
  subText: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontSize: 17,
  },
  headView: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headText: {
    textAlign: "left",
    padding: 10,
    paddingVertical: 14,
  },
});



// shadowColor: '#55f',
// shadowOffset:3,
// shadowOpacity: 15,
// shadowRadius: 15,

// bgcolor == 'blue' && '#bfd' ||
// bgcolor == 'red' && '#fdb' ||
// bgcolor == 'green' && '#dfd' ||
// bgcolor == 'yellow' && '#ffb' 