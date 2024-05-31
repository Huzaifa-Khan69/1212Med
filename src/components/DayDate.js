import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../theme/color';

const DayDate = ({day, id, selectedItem, date,onPress}) => {

  
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: '20%',
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10,
      }, selectedItem === id ? {backgroundColor: color.dark_blue} : null]}>
      <Text style={[{fontSize: 30, color: color.dark_blue}, selectedItem === id ? {color: 'white'} : null]}>{day}</Text>
      <Text style={[{fontSize: 30, color: color.dark_blue}, selectedItem === id ? {color: 'white'} : null]}>{date}</Text>
    </TouchableOpacity>
  );
};

export default DayDate;

const styles = StyleSheet.create({});
