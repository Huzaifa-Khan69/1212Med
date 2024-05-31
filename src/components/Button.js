import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import color from '../theme/color';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Button = ({Buttontext, icon=false, fontStyle, style,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
        {icon ? icon : null}
      <Text style={[{color: 'white', fontSize: 25}, fontStyle]}>
        {Buttontext}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height:60,
    backgroundColor: 'black',
    borderRadius: 50,
    marginBottom:10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
});
