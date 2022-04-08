import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Form from './zzzzzzz/Form';


function App() {

  const [fullname, setFullname] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [checkbox, setCheckbox] = useState()
  const [message, setMessage] = useState()
  const [captcha, setCaptcha] = useState(true)

  setCaptcha
  return (
    <SafeAreaView style={{ }}>
      <View style={{marginVertical:30,}} >
      <Form
        f e p c cP
        // f e p cP m c
        size={1}
        style={{ height: 650}}
        captcha={captcha} setCaptcha={setCaptcha} host="192.168.42.34"
        fullname={fullname} setFullname={setFullname}
        email={email} setEmail={setEmail}
        password={password} setPassword={setPassword}
        confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
        checkbox={checkbox} setCheckbox={setCheckbox}
        message={message} setMessage={setMessage}
        onPress={() => alert('goood')}
      >
فراموشی رمز عبور
      </Form>
      </View>

    </SafeAreaView>
  )
}



export default App;