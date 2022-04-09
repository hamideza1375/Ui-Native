import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image,StyleSheet } from 'react-native'
import Input from './Input'
import Button from './Button'
import Checkbox from './Checkbox'
import handler from './handler'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
const newObj = new Proxy({}, handler);


const Form = ({ f, e, p, cP, m, c, style, fullname, setFullname,
  email, setEmail, password, setPassword,
  confirmPassword, setConfirmPassword, onPress, message,
  setMessage, checkbox, setCheckbox, size = 1, 
  children, captcha, setCaptcha,host }) => {


  const [show, setShow] = useState(false)
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


  newObj.fullname = fullname
  newObj.email = email;
  newObj.password = password;
  newObj.confirmPassword = confirmPassword;
  newObj.message = message;

  var flm = newObj.fullname === fullname
  var eml = newObj.email === email
  var psd = newObj.password === password
  var cfpsd = newObj.confirmPassword === confirmPassword
  var msg = newObj.message === message


  return (
    <View
      style={[styles.container, style,{transform: [{ scaleY: size }],}]} >

      {f && <View style={styles.viewInput} >
        <Text style={styles.textinput} >نام</Text>
        <Input
          textContentType="name"
          autoComplete="name"
          icon="user"
          defaultValue=""
          p=" نام "
          value={fullname}
          onChangeText={(text) => setFullname(text)}
          onBlur={() => set_Fullname(true)}
          style={styles.input}
        />
        {_fullname && !flm && <Text style={[styles.textinput,{color:'red'}]} >
          {newObj.fullname}
        </Text>}
      </View>}

      {e && <View style={styles.viewInput} >
        <Text style={styles.textinput} >ایمیل</Text>
        <Input p=" ایمیل "
          textContentType="emailAddress"
          autoComplete="email"
          icon="envelope"
          keyboardType="email-address"
          defaultValue=""
          value={email}
          onChangeText={(text) => setEmail(text)}
          onBlur={() => set_Email(true)}
          style={styles.input}
        />
        {_email && !eml && <Text style={[styles.textinput,{color:'red'}]} >
          {newObj.email}
        </Text>}
      </View>}

      {p && <View style={styles.viewInput} >
        <Text style={styles.textinput} >رمز عبور</Text>
        <Input p=" رمز عبور "
          textContentType="password"
          autoComplete="password"
          icon="eye-slash"
          secureTextEntry={true}
          defaultValue=""
          value={password}
          onChangeText={(text) => setPassword(text)}
          onBlur={() => set_Password(true)}
          style={styles.input}
        />
        {_password && !psd && <Text style={[styles.textinput,{color:'red'}]} >
          {newObj.password}
        </Text>}
      </View>}

      {cP && <View style={styles.viewInput} >
        <Text style={styles.textinput} >تکرار رمز عبور</Text>
        <Input
          textContentType="password"
          autoComplete="password"
          icon="eye-slash"
          secureTextEntry
          defaultValue=""
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          p=" تکرار رمز عبور "
          onBlur={() => set_ConfirmPassword(true)}
          style={styles.input}
        />
        {_confirmPassword && !cfpsd && <Text style={[styles.textinput,{color:'red'}]} >
          {newObj.confirmPassword}
        </Text>}
      </View>}

      {m && <View style={styles.viewInput} >
        <Text style={styles.textinput} >ارسال پیام</Text>
        <Input
          multiline
          autoCorrect={true}
          value={message}
          onChangeText={(text) => setMessage(text)}
          p="ارسال پیام"
          onBlur={() => set_Message(true)}
          style={styles.messageInput} />
        {_message && !msg && <Text style={[styles.textinput,{color:'red'}]} >
          {newObj.message}
        </Text>}
      </View>}



      {c && <View style={styles.viewCheckbox}>
        <Checkbox onPress={() => setShow(!show)} />
        <Text onPress={(e) => console.log(e.nativeEvent.text)} style={{ marginLeft: 11 }} >موافقط با قوانین</Text>
      </View>}



      {captcha &&
        <View style={styles.viewCaptcha}>
          <Image source={{ uri: `http://${host}/captcha.png/${rand}` }}
            style={styles.imageCaptcha} />
          <Icon name="refresh" color="#333399f0" size={22}
            onPress={() => setShow2(!show2)}
            style={{ marginTop: 35 }} />
          <TextInput placeholder="کد امنیتی" autoCompleteType="number"
            style={styles.TextInput} value={captcha} onChangeText={text => setCaptcha(text)} />
        </View>
      }


      {children &&
        <View style={styles.viewChildren}>
          <Text onPress={(e) => console.log(e.nativeEvent.text)}
            style={{ color: '#0cf' }} >{children}</Text>
        </View>}


      <Button onPress={flm && eml && psd && cfpsd && msg &&
        show == true ? onPress : () => alert('kkataa')}
        style={styles.btn} >
        click
      </Button>

    </View>
  )

}
// {/*  setCheckbox(e.target._internalFiberInstanceHandleDEV.memoizedProps.checked) */}
export default Form
const styles = StyleSheet.create({
  btn: {
    marginTop: 30,
    marginBottom: 8,
    width: 220,
    alignSelf: 'center',
  },
  viewChildren: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 18,
    marginLeft: 5,
  },
  TextInput: {
    borderRadius: 2,
    marginTop: 26,
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
    marginTop: 25,
    width: 105,
    height: 40,
  },
  viewCaptcha: {
    flexDirection: "row",
    alignSelf: 'flex-start',
    justifyContent: "space-between",
    width: 250,
  },
  viewCheckbox: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: 150,
  },
  textinput: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  container: {
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
  messageInput: {
    height: 100,
    shadowColor: "#000",
    shadowOpacity: .4,
    shadowRadius: 4,
    shadowOffset: {
              width: 1,
    height: 2,
    },
  },
  input: {
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
  },
})