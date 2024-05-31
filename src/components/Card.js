import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../theme/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Card = ({icon,name}) => {
  return (
    <View style={{width:'50%', }}>
      <Text style={{fontSize: 18,marginLeft:15,color:color.dark_blue}}>Current Credite Card</Text>
      <View
        style={{
          width: '90%',
          height: 100,
          borderRadius: 15,
          backgroundColor: color.white,
          marginLeft: 15,
          borderWidth:3,
          borderColor:color.dark_blue
        }}>
        <View style={{marginLeft: 15, marginTop: 10}}>
          <FontAwesome name="cc-visa" size={20} color={color.dark_blue}/>
        </View>
        <Text style={{marginLeft: 15, marginTop: 20,color:color.dark_blue}}>.... .... .... 3294</Text>
        <Text style={{marginLeft: 15,color:color.dark_blue}}>Huzaifa</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
