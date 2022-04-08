export default handler = {
    get: (target, propName) => {
      if (propName === 'fullname') {
        if (typeof target[propName] === 'string') {
          if (target[propName].length < 3) {
            return ('نام نباید کوچک تر از ۳ کلمه باشد')
          }
          if (target[propName].length > 15) {
            return ('نام نباید بزرگ تر از ۱۵ کلمه باشد')
          }
          else {
            return target[propName]
          }}
      }
      if (propName === 'email') {
        if (typeof target[propName] === 'string') {
          if (target[propName].length < 5) {
            return ('ایمیل وارد شده صحیح نمیباشد')
          }
          else if (target[propName].length > 50) {
            return ('ایمیل وارد شده صحیح نمیباشد')
          }
          else if (!target[propName].includes("@") || !target[propName].includes(".")) {
            return ('ایمیل وارد شده صحیح نمیباشد')
          }
          else {
            return target[propName]
          }}
      }
      if (propName === 'password') {
        if (typeof target[propName] === 'string') {
          if (target[propName].length < 4) {
            return ('رمز عبور نباید کوچک تر از ۴ کلمه باشد')
          }
          else if (target[propName].length > 20) {
            return ('رمز عبور نباید بزرگ تر از ۲۰ کلمه باشد')
          }
          else {
            return target[propName]
          }}
      }
      var conpass = target.password == target.confirmPassword
      if (propName === 'confirmPassword') {
        if (!conpass)
          return "khata"
          else
          return target[propName]
      }
      if (propName === 'message') {
        if (typeof target[propName] === 'string') {
  
          if (target[propName].length < 4) {
            return ('پیام نباید کوچک تر از ۴ کلمه باشد')
          }
          else if (target[propName].length > 500) {
            return ('پیام بزرک تر از حد مجاز هست')
          }
          else {
            return target[propName]
          }}
      }
    }
  }