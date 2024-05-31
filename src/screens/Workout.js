import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../theme/color';
import CustomHeader from '../components/CustomHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Work from '../components/Work';
import images from '../assets/images';

const data=[
  {
    img:<Image style={{width: 45, height: 40}} source={images.workout1} />,
    num:1,
    Workout:"Workout Name"
  },
  {
    img:<Image style={{width: 45, height: 40}} source={images.workout2} />,
    num:2,
    Workout:"Workout Name"
  },
  {
    img:<Image style={{width: 45, height: 40}} source={images.workout3} />,
    num:3,
    Workout:"Workout Name"
  },
  {
    img:<Image style={{width: 45, height: 40}} source={images.workout4} />,
    num:4,
    Workout:"Workout Name"
  },
  {
    img:<Image style={{width: 45, height: 40}} source={images.workout5} />,
    num:5,
    Workout:"Workout Name"
  },
  {
    img:<Image style={{width: 45, height: 40}} source={images.workout6} />,
    num:6,
    Workout:"Workout Name"
  }

]
const Workout = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, width: '100%'}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          bottom: 0,
          zIndex: -1,
          backgroundColor: color.light,
        }}
      />
      <CustomHeader
        title={'Workout For Your Days'}
        icon2={<MaterialIcons name="person-outline" size={25} />}
      />
      <View
        style={{borderBottomColor: color.dark_blue, borderBottomWidth: 1}}
      />
      {data.map(eachObject=>{
        return(
          <Work
        img={eachObject.img}
        num={eachObject.num}
        Workout={eachObject.Workout}
      />
        )
      })}
      
    </ScrollView>
  );
};

export default Workout;

const styles = StyleSheet.create({});
