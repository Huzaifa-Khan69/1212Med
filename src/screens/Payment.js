import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../theme/color';
import Card from '../components/Card';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Input from '../components/Input';
import Button from '../components/Button';

const Payment = ({navigation}) => {
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
      <View
        style={{
          backgroundColor: 'white',
          height: '85%',
          width: '85%',
          alignSelf: 'center',
          marginTop: '6%',
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 40, color: color.dark_blue, marginLeft: '5%'}}>
          Make Your Payment
        </Text>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <Card />
          <View style={{width: '50%', marginLeft: 10}}>
            <Text style={{fontSize: 18, color: color.dark_blue}}>
              Add New Credit Card
            </Text>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 100,
                borderRadius: 15,
                backgroundColor: color.white,
                borderWidth: 3,
                borderColor: color.dark_blue,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <EvilIcons name="plus" size={40} color={color.dark_blue} />
            </TouchableOpacity>
          </View>
        </View>
        <Input
          title={'Name Of card Holder'}
          placeholder={'Name'}
          containerStyle={{marginTop: 15}}
          style={{borderRadius: 80, height: 50, fontSize: 20}}
          titleStyle={{fontSize: 15, color: color.dark_blue}}
        />
        <Input
          title={'Credit card Number'}
          placeholder={'0295 2581 2568 2487'}
          containerStyle={{marginTop: 10}}
          style={{borderRadius: 80, height: 50}}
          titleStyle={{fontSize: 15, color: color.dark_blue}}
        />
        <View style={{flexDirection: 'row'}}>
          <Input
            title={'Expiration'}
            placeholder={'05/27'}
            containerStyle={{width: '50%', marginTop: 10}}
            style={{borderRadius: 80, height: 50, width: '80%'}}
            titleStyle={{fontSize: 15, color: color.dark_blue}}
          />
          <Input
            title={'CVV'}
            placeholder={'231'}
            containerStyle={{width: '50%', marginLeft: 5, marginTop: 10}}
            style={{borderRadius: 80, height: 50, width: '80%'}}
            titleStyle={{fontSize: 15, color: color.dark_blue}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 8,
          }}>
          <Text style={{fontSize: 20, color: color.dark_blue}}>Total</Text>
          <Text style={{fontSize: 20, color: color.dark_blue}}>USD $8.99</Text>
        </View>
        <Input
          title={'Credit card Number'}
          placeholder={'0295 2581 2568 2487'}
          containerStyle={{marginTop: 5}}
          style={{borderRadius: 80, height: 50}}
          titleStyle={{fontSize: 15, color: color.dark_blue}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 8,
          }}>
          <Text style={{fontSize: 20, color: color.dark_blue}}>Discount</Text>
          <Text style={{fontSize: 20, color: color.dark_blue}}>USD $6.99</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '85%',
          marginTop: 10,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center'
        }}>
        <Button
        onPress={()=> navigation.navigate("DietAndSleep")}
          Buttontext={'Make Payment'}
          fontStyle={{color: 'white', marginLeft: 20,fontSize:20}}
          style={{
            backgroundColor: color.dark_blue,
            borderRadius: 20,
            width: '50%',
          }}
        />
        <Button
          Buttontext={'Cancel'}
          fontStyle={{color: color.dark_blue, marginLeft: 20,fontSize:20}}
          style={{
            backgroundColor: color.white,
            borderRadius: 10,
            width: '50%',
            marginLeft: 20,
          }}
        />
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
