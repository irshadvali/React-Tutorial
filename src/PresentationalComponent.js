import React, { Component } from 'react'
import { Text, View } from 'react-native'

const PresentationalComponent = (props) =>{
   return (
      <View>
         <Text onPress = {props.updateState}>
            {props.myState}
         </Text>
      </View>
   )
}

export default PresentationalComponent
