import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import color from '../theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ServiceDetail = ({img, Title, description, fontstyle, number,onPress,onRightArrowPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      <View style={{width: '25%', height: '100%'}}>
        {img ? img : null}
        <TouchableOpacity  style={{
            width: 60,
            height: 60,
            borderRadius: 70,
            backgroundColor: color.light,
            justifyContent:"center",
            alignItems:"center",
            marginTop:15,
            marginLeft:5
          }}>
        <Text style={{fontSize:30}}>{number ? number : null}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'column', width: '50%'}}>
        <Text style={[{color: 'white', fontSize: 20}, fontstyle]}>{Title}</Text>
        <Text
          style={[
            {color: 'white', fontSize: 15, textAlign: 'left'},
            fontstyle,
          ]}>
          {description}
        </Text>
      </View>
      <TouchableOpacity
      onPress={onRightArrowPress}
        style={{
          width: '20%',
          height: 100,
          backgroundColor: color.dark_blue,
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          marginLeft:15,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AntDesign name="right" size={50} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ServiceDetail;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
});
