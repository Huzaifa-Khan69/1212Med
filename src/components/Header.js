import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../theme/color'

const Header = ({name,icon=false}) => {
  return (
    <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",alignItems:"center",paddingHorizontal: 20, marginVertical: 20}}> 
      <Text style={{color:"#171E5B",fontSize:30,}}>Hey {name},</Text>
      <View style={{marginLeft:"50%"}}>{icon ? icon : null}</View>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})