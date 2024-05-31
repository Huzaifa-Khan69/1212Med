import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import images from '../assets/images/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';
import color from '../theme/color';

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: '42%',
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          position: 'absolute',
          bottom: 0,
          zIndex: -1,
          backgroundColor: color.light,
        }}
      />
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Image source={images.logo} />
      </View>
      <View
        style={{
          height: '40%',
          width: '90%',
          alignSelf: 'center',
        }}>
        <Image
          style={{resizeMode: 'contain', width: '100%', height: '100%'}}
          source={images.welcome_screen_img}
        />
      </View>
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#181E5B', textAlign: 'center', marginTop: 10}}>
          Medical And General Care
        </Text>
        <Text style={{color: '#181E5B', fontSize: 50}}>
          Be <Text style={{fontWeight: 'bold'}}>Wealthy</Text>
        </Text>
        <Text style={{color: '#181E5B', fontSize: 50}}>
          By Being <Text style={{fontWeight: 'bold'}}>Healthy</Text>
        </Text>
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Auth')}
          style={{
            width: 200,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#181E5B',
            justifyContent: 'center',
            marginLeft: 20,
          }}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              color: 'white',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Auth')}
          style={{
            width: 70,
            height: 60,
            borderRadius: 70,
            backgroundColor: '#181E5B',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 60,
          }}>
          <AntDesign name="right" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
