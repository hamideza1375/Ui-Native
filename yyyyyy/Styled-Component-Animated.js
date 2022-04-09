import React from 'react'
import {Animated} from 'react-native'
import styled from 'styled-components/native'


export default App=()=> {
  const _opacity = React.useRef(new Animated.Value(0)).current;


React.useEffect(() => {
 
  Animated.timing(_opacity, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: false
  }).start()

}, [])

return (
  <BaseStyles style={{ opacity:_opacity }} />
)


}
const BaseStyles = styled(Animated.View)`
border: 1px solid blue;
width: 200px;
height: 100px;
margin: auto
background-color: pink;
`