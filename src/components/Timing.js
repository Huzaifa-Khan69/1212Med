import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../theme/color';

const Timing = ({timing,onPress,id,selectedTimingItem}) => {
  return (
    <TouchableOpacity
     onPress={onPress}
      style={[{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '28%',
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 15,
        borderRadius: 10,
      },selectedTimingItem === id ? {backgroundColor: color.dark_blue} : null]}>
      <AntDesign name="clockcircleo" size={20} color={selectedTimingItem === id ?color.white: color.dark_blue} />
      <Text style={[{marginLeft:10,fontSize: 20, color: color.dark_blue},selectedTimingItem
         === id ? {color:"white"} : null]}>{timing}
      </Text>
    </TouchableOpacity>
  );
};

export default Timing;

const styles = StyleSheet.create({});
