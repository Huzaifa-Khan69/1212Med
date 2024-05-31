import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import images from '../assets/images';
import Button from '../components/Button';
import color from '../theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Auth = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: '75%',
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
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={images.logo} />
      </View>
      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#181E5B', textAlign: 'center', marginTop: 50}}>
          Medical And General Care
        </Text>
        <Text style={{color: '#181E5B', fontSize: 50}}>
          Be <Text style={{fontWeight: 'bold'}}>Wealthy</Text>
        </Text>
        <Text style={{color: '#181E5B', fontSize: 50}}>
          By Being <Text style={{fontWeight: 'bold'}}>Healthy</Text>
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 40}}>
        <Button
          onPress={() => navigation.navigate('Details')}
          Buttontext={'Continue With Apple'}
          icon={<AntDesign name={'apple1'} size={25} color={'white'} />}
          fontStyle={{marginLeft: 20}}
          style={{backgroundColor: color.black}}
        />
        <Button
          onPress={() => navigation.navigate('Details')}
          Buttontext={'Continue With Google'}
          icon={
            <Image source={images.google} style={{width: 30, height: 30}} />
          }
          fontStyle={{color: 'black', marginLeft: 20}}
          style={{backgroundColor: color.white}}
        />
        <Button
          onPress={() => navigation.navigate('Details')}
          Buttontext={'Continue With Facebook'}
          icon={<Ionicons name="logo-facebook" size={25} color={'white'} />}
          fontStyle={{color: 'white', marginLeft: 20}}
          style={{backgroundColor: color.blue}}
        />
      </View>
      <View
        style={{
          marginTop: 30,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{textAlign: 'center', fontSize: 15}}>
          By registering, you agree to our
          <Text style={{fontWeight: 'bold'}}>
            {' '}
            Terms of Service, Privacy Policy
          </Text>
        </Text>
        <Text>
          and
          <Text style={{fontWeight: 'bold'}}> Cookie Policy.</Text>
        </Text>
        <Text style={{justifyContent: 'center', fontSize: 25, marginTop: 20}}>
          Recover My Account
        </Text>
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({});
