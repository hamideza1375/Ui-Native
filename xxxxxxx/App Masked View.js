import React from 'react'
import MaskedView from './zzzzzzz/MaskedView'
import styled from 'styled-components/native'

const App = () => {
  return (
    <>
      <MaskedView source={require("./a12.jpg")} >
        <H1> Basic Mask </H1>
      </MaskedView>
    </>
  )
}



const H1 = styled.Text`
 fontSize: 60px
`


export default App
