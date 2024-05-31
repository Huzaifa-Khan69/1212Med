import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Input = ({title,placeholder,icon,style,titleStyle,containerStyle}) => {
  return (
    <View style={[{alignContent:"center",width:"90%",marginLeft:15,marginTop:20},containerStyle]}>
        <Text style={[{fontSize:25},titleStyle]}>{title}</Text>
        <View style={{width:'100%',alignSelf:'center'}}>
        <TextInput style={[{width:"100%",borderRadius:10,borderWidth:1,marginTop:10},style]} placeholder={placeholder} />
        <TouchableOpacity style={{position:'absolute',right:10,height:'100%',justifyContent:'center'}}>
        {icon ? icon : null}
        </TouchableOpacity>
        </View>
      </View>
  )
}

export default Input

const styles = StyleSheet.create({})