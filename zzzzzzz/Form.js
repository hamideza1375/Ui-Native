import React, { useState, useEffect, useRef } from 'react'
import {
  View, Text, TextInput, Image, StyleSheet, ScrollView, Dimensions,
  Animated, Easing
} from 'react-native'
import Input from './Input'
import Button from './Button'
import Checkbox from './Checkbox'
import handler from './handler'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
const newObj = new Proxy({}, handler);


const { width, height } = Dimensions.get("window");




const Form = ({ f, e, p, cP, m, c, style, fullname, setFullname,
  email, setEmail, password, setPassword,
  confirmPassword, setConfirmPassword, onPress, message,
  setMessage, checkbox, setCheckbox,
  children, captcha, setCaptcha, host }) => {



  const [orientation, setOrientation] = useState("PORTRAIT");
  const [dHeight, setDheight] = useState(height);
  const [dWidth, setDwidth] = useState(width);



  Dimensions.addEventListener('change', ({ window: { width, height } }) => {
    if (width < height) { setOrientation("PORTRAIT"); setDwidth(width); setDheight(height) }
    else { setOrientation("LANDSCAPE"); setDwidth(width); setDheight(height) }
  })




  const [secure, setSecure] = useState(true)
  const [secure2, setSecure2] = useState(true)

  const [show, setShow] = useState(c ? false : true)
  const [rand, setRand] = useState(9999);
  const [show2, setShow2] = useState(false);


  useEffect(() => {
    setRand(parseInt(Math.random() * rand + 2000))
  }, [show2])


  const [_fullname, set_Fullname] = useState()
  const [_email, set_Email] = useState()
  const [_password, set_Password] = useState()
  const [_confirmPassword, set_ConfirmPassword] = useState()
  const [_message, set_Message] = useState()
  const [_checkbox, set_Checkbox] = useState()


  newObj.fullname = fullname
  newObj.email = email;
  newObj.password = password;
  newObj.confirmPassword = confirmPassword;
  newObj.message = message;

  var flm = f ? newObj.fullname === fullname : true
  var eml = e ? newObj.email === email : true
  var psd = p ? newObj.password === password : true
  var cfpsd = cP ? newObj.confirmPassword === confirmPassword : true
  var msg = m ? newObj.message === message : true

  let ChangeView = orientation === "PORTRAIT" ? View : ScrollView

  let styleContainer = orientation === "PORTRAIT" ? styles.viewContainer : styles.container


  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;

  const fadeOut = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 5,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim, {
        toValue: 5,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  };
  const iterPlt = fadeAnim.interpolate({
    inputRange: [0, 5],
    outputRange: ["#f22", "black"]
  })


  const fadeOut2 = () => {
    Animated.sequence([
      Animated.timing(fadeAnim2, {
        toValue: 5,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim2, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim2, {
        toValue: 5,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim2, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  };
  const iterPlt2 = fadeAnim2.interpolate({
    inputRange: [0, 5],
    outputRange: ["#f22", "black"]
  })


  const fadeOut3 = () => {
    Animated.sequence([
      Animated.timing(fadeAnim3, {
        toValue: 5,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim3, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim3, {
        toValue: 5,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim3, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  };
  const iterPlt3 = fadeAnim3.interpolate({
    inputRange: [0, 5],
    outputRange: ["#f22", "black"]
  })


  const fadeOut4 = () => {
    Animated.sequence([
      Animated.timing(fadeAnim4, {
        toValue: 5,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim4, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim4, {
        toValue: 5,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(fadeAnim4, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  };
  const iterPlt4 = fadeAnim4.interpolate({
    inputRange: [0, 5],
    outputRange: ["#f22", "black"]
  })


  return (
    <ChangeView
      style={[styleContainer, style]}
      contentContainerStyle={[styles.contentContainerStyle, { flexGrow: 1 }]}
    >
      {f && <Animated.View style={styles.viewInput} >
        <Text style={styles.textinput} >نام</Text>
        <Animated.View style={[
          styles.animatedBorder
          , _fullname && !flm &&
          {
            borderWidth: 1.2, borderColor: iterPlt, transform: [{ translateX: fadeAnim }]
          }]} >
          <Input
            textContentType="name"
            autoComplete="name"
            icon="user"
            defaultValue=""
            p=" نام "
            value={fullname}
            onChangeText={(text) => setFullname(text)}
            onBlur={() => { set_Fullname(true); !flm && fadeOut() }}
            style={[styles.input]}
          />
        </Animated.View>
        {_fullname && !flm && <Text style={[styles.textinput, { color: 'red' }]} >
          {newObj.fullname}
        </Text>
        }
      </Animated.View>}
      {e && <Animated.View style={[styles.viewInput,
      !eml && { transform: [{ translateX: fadeAnim2 }] }]} >
        <Text style={styles.textinput} >ایمیل</Text>
        <Animated.View style={[styles.animatedBorder, _email && !eml &&
          { borderWidth: 1.2, borderColor: iterPlt2 }]} >
          <Input p=" ایمیل "
            textContentType="emailAddress"
            autoComplete="email"
            icon="envelope"
            keyboardType="email-address"
            defaultValue=""
            value={email}
            onChangeText={(text) => setEmail(text)}
            onBlur={() => { set_Email(true); !eml && fadeOut2() }}
            style={styles.input}
          />
        </Animated.View>
        {_email && !eml && <Text style={[styles.textinput, { color: 'red' }]} >
          {newObj.email}
        </Text>}
      </Animated.View>}
      {p && <Animated.View style={styles.viewInput} >
        <Text style={styles.textinput} >رمز عبور</Text>
        <Animated.View style={[styles.animatedBorder, _password && !psd &&
        {
          borderWidth: 1.2, borderColor: iterPlt3, transform: [{ translateX: fadeAnim3 }]
        }]} >
          <Input p=" رمز عبور "
            textContentType="password"
            autoComplete="password"
            iconPress={() => { setSecure(!secure); }}
            icon={!secure ? "eye" : "eye-slash"}
            secureTextEntry={secure}
            defaultValue=""
            value={password}
            onChangeText={(text) => setPassword(text)}
            onBlur={() => { set_Password(true); !psd && fadeOut3() }}
            style={styles.input}
          />
        </Animated.View>
        {_password && !psd && <Text style={[styles.textinput, { color: 'red' }]} >
          {newObj.password}
        </Text>}
      </Animated.View>}
      {cP && <Animated.View style={styles.viewInput} >
        <Text style={styles.textinput} >تکرار رمز عبور</Text>
        <Animated.View style={[styles.animatedBorder,
        _confirmPassword && !cfpsd &&
        { borderWidth: 1.2, borderColor: iterPlt4, transform: [{ translateX: fadeAnim4 }] }]} >
          <Input
            textContentType="password"
            autoComplete="password"
            iconPress={() => { setSecure2(!secure2); }}
            icon={!secure2 ? "eye" : "eye-slash"}
            secureTextEntry={secure2}
            defaultValue=""
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            p=" تکرار رمز عبور "
            onBlur={() => { set_ConfirmPassword(true); !cfpsd && fadeOut4() }}
            style={styles.input}
          />
        </Animated.View>
        {_confirmPassword && !cfpsd && <Text style={[styles.textinput, { color: 'red' }]} >
          {newObj.confirmPassword}
        </Text>}
      </Animated.View>}
      {m && <View style={[styles.viewInput, { minHeight: 150 }]} >
        <Text style={styles.textinput} >ارسال پیام</Text>
        <View style={[{ height: '68%', marginBottom: 5 },
        !msg && { borderWidth: 1.2, borderColor: '#f22', borderRadius: 5 }]} >
          <Input
            multiline
            value={message}
            onChangeText={(text) => setMessage(text)}
            p="ارسال پیام"
            onBlur={() => set_Message(true)}
            style={styles.messageInput}
          />
        </View>
        {_message && !msg && <Text style={[styles.textinput, { color: 'red' }]} >
          {newObj.message}
        </Text>}
      </View>}

      {c &&
      
      <View style={{marginBottom:11}} >
      <View style={styles.viewCheckbox}>
        <Checkbox onPress={() => setShow(!show)} />
        <Text onPress={(e) => console.log(e.nativeEvent.text)} style={{ marginLeft: 11 }} >موافقط با قوانین</Text>
      </View>
     {_checkbox && show == false && <Text style={{color:'red', alignSelf:'flex-start'}} >پرکردن فیلد الزامی هست</Text>}
      </View>
      
      }

      {captcha &&
        <View style={styles.viewCaptcha}>
          <Image source={{ uri: `http://${host}/captcha.png/${rand}` }}
            style={styles.imageCaptcha} />
          <Icon name="refresh" color="#333399f0" size={22}
            onPress={() => setShow2(!show2)}
          />
          <TextInput placeholder="کد امنیتی" autoCompleteType="number"
            style={styles.TextInput} value={captcha} onChangeText={text => setCaptcha(text)} />
        </View>
      }
      {children &&
        <View style={styles.viewChildren}>
          <Text onPress={(e) => console.log(e.nativeEvent.text)}
            style={{ color: '#0cf' }} >{children}</Text>
        </View>}
      <Button
        onPressIn={() => {
          set_Fullname(true);
          set_Email(true);
          set_Password(true);
          set_ConfirmPassword(true);
          set_Message(true);
          set_Checkbox(true);
          
        }}
        onPress={
          flm && eml && psd && cfpsd && msg && show == true
            ?
            onPress :
            () => alert('kkataa')}

        style={styles.btn} >
        click
      </Button>
    </ChangeView>
  )

}
// {/*  setCheckbox(e.target._internalFiberInstanceHandleDEV.memoizedProps.checked) */}
export default Form
const styles = StyleSheet.create({
  animatedBorder: {
    height: '60%',
    borderRadius: 5,
    marginBottom: 5,
  },
  viewContainer: {
    height: '100%',
    backgroundColor: '#f0f0f0',
    width: '100%',
    borderWidth: .3,
    padding: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: .6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2
    }
  },

  contentContainerStyle: {
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    height: '100%',
    backgroundColor: '#f0f0f0',
    width: '100%',
    borderWidth: .3,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: .6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2
    }
  },

  btn: {
    flexBasis: 1,
    marginTop: 30,
    marginBottom: 8,
    width: 200,
    alignSelf: 'center',
    minHeight: 45
  },
  viewChildren: {
    flexBasis: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 22,
    marginLeft: 5,
    minHeight: 20,

  },
  TextInput: {
    borderRadius: 2,
    textAlign: 'right',
    padding: 7,
    width: 85,
    height: 37,
    borderWidth: 1,
  },
  imageCaptcha: {
    borderRadius: 2,
    padding: 5,
    backgroundColor: "#412",
    width: 105,
    height: 40,
  },
  viewCaptcha: {
    flexBasis: 1,
    flexDirection: "row",
    alignSelf: 'flex-start',
    alignContent: 'center',
    justifyContent: "space-between",
    width: 250,
    minHeight: 40,
    marginTop: 25,

  },
  viewCheckbox: {
    flexBasis: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: 150,
    minHeight: 18,
    marginVertical: 8,
  },

  messageInput: {
    minHeight: 100,
    shadowColor: "#000",
    shadowOpacity: .4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  textinput: {
    height: '25%',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  input: {
    marginBottom: 5,
    height: '100%',
    shadowColor: "#000",
    shadowOpacity: .4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 2

    },
  },
  viewInput: {
    marginBottom: 19,
    flexBasis: 1,
    minHeight: 75,
  },
})