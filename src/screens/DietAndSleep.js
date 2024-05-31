import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../theme/color';
import CustomHeader from '../components/CustomHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../components/Input';
import Button from '../components/Button';

const data = [
  {
    title: 'What Are You Taking In Break Fast?',
    placeholder: 'Type Here',
  },
  {
    title: 'What Are You Taking In Lunch?',
    placeholder: 'Type Here',
  },
  {
    title: 'What Are You Taking In Dinner?',
    placeholder: 'Type Here',
  },
  {
    title: 'Tell Us About Your Sleep Hours?',
    placeholder: 'Type Here',
  },
];

const DietAndSleep = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
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
        title={'Diet And Sleep Tracking'}
        icon2={<MaterialIcons name="person-outline" size={25} />}
      />
      <View
        style={{borderBottomColor: color.dark_blue, borderBottomWidth: 1}}
      />
      <View style={{marginTop: 10, marginLeft: 10}}>
        <Text style={{fontSize: 35, color: color.dark_blue}}>
          Tell Us About Your Diet and Sleep Hours
        </Text>
      </View>
      {data.map(eachObject => {
        return (
          <Input
            title={eachObject.title}
            placeholder={eachObject.placeholder}
          />
        );
      })}

      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Button
          onPress={() => navigation.navigate('Workout')}
          Buttontext={'Submit'}
          fontStyle={{color: 'white', marginLeft: 20}}
          style={{backgroundColor: color.dark_blue, borderRadius: 20}}
        />
      </View>
    </View>
  );
};

export default DietAndSleep;

const styles = StyleSheet.create({});
