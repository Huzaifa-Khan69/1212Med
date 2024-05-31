import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import color from '../theme/color';
import Header from '../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../components/Input';
import Button from '../components/Button';
import Entypo from "react-native-vector-icons/Entypo"

const data=[
  {
    title:'First Name',
    placeholder:'Enter Your First Name'
  },
  {
    title:'Last Name',
    placeholder:'Enter Your Last Name'
  },
  {
    title:'Email Address',
    placeholder:'@Youremailaddress'
  },
  {
    title:'Phone No',
    placeholder:'000 000 0000'
  },
  {
    title:'Home Address',
    placeholder:'Enter Your Address Here'
  },
  {
    title:'Any Kind Of Medical Report (Optional)',
    placeholder:'Attached Here',
    icon:icon=<Entypo name='attachment' size={20}/>
  },
  {
    title:'Message',
    placeholder:'Type'
  },
]

const Form = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, width: '100%'}}>
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
      <Header
        name="Mayab"
        icon={<MaterialIcons name="person-outline" size={25} />}
      />
      <View
        style={{borderBottomColor: color.dark_blue, borderBottomWidth: 1}}
      />
      <View
        style={{
          alignContent: 'center',
          marginLeft: 15,
          marginTop: 20,
          width: '90%',
        }}>
        <Text style={{fontSize: 35, color: color.dark_blue}}>
          Tell Us About Yourself
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry alaha bla la nas dkg shfk shf hdjg ffhgj dhfgg.
        </Text>
      </View>
      {data.map(eachObject=>{
        return(
          <Input title={eachObject.title} placeholder={eachObject.placeholder} icon={eachObject.icon} />
        )
      })}
      
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Button
        onPress={()=>navigation.navigate("Services")}
          Buttontext={'Submit'}
          fontStyle={{color: 'white', marginLeft: 20}}
          style={{backgroundColor: color.dark_blue, borderRadius: 20}}
        />
      </View>
    </ScrollView>
  );
};

export default Form;

const styles = StyleSheet.create({});
