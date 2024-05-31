import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomHeader = ({title, icon1 = false, icon2 = false}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 20,
      }}>
      <Text style={{color: '#171E5B', fontSize: 30}}>{title}</Text>
      <View style={{flexDirection:"row",alignItems:"center",width:"20%",justifyContent:"space-between"}}>
        <View>
        {icon1 ? icon1 : null}
        </View>
      <View style={{left:5}}>
        {icon2 ? icon2 : null}
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
