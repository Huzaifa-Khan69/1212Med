import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomHeader from '../components/CustomHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../theme/color';
import ServiceDetail from '../components/ServiceDetail';
import images from '../assets/images';

const data = [
  {
    number: 1,
    title: 'Electronic Medical Records (EMR) Integration',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    number: 2,
    title: 'Appointment Booking',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    number: 3,
    title: 'Diet and Sleep Tracking',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    number: 4,
    title: 'Exercise Recommendations',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const Services = ({navigation}) => {
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
        title={'Welcome'}
        icon1={<AntDesign name="message1" size={25} />}
        icon2={<MaterialIcons name="person-outline" size={25} />}
      />
      <View
        style={{borderBottomColor: color.dark_blue, borderBottomWidth: 1}}
      />
      <View
        style={{alignContent: 'center', alignItems: 'center', marginTop: 20}}>
        {data.map(eachObject => {
          return (
            <ServiceDetail
              onPress={() => navigation.navigate('Appoinment')}
              onRightArrowPress={() => navigation.navigate('Appoinment')}
              number={eachObject.number}
              Title={eachObject.title}
              description={eachObject.description}
              fontstyle={{color: color.dark_blue, fontSize: 15}}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
