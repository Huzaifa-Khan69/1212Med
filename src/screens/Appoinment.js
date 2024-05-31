import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import color from '../theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomHeader from '../components/CustomHeader';
import DayDate from '../components/DayDate';
import Timing from '../components/Timing';
import Button from '../components/Button';

const Appoinment = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedMorningItem,setSelectedMorningItem]=useState(null)
  const [selectedEveningItem,setSelectedEveningItem]=useState(null)
  const data = [
    {
      day: 'Mon',
      date: '21',
      id: 0,
    },
    {
      day: 'Tue',
      date: '22',
      id: 1,
    },
    {
      day: 'Wed',
      date: '23',
      id: 2,
    },
    {
      day: 'Thu',
      date: '24',
      id: 3,
    },
    {
      day: 'Fri',
      date: '25',
      id: 4,
    },
  ];
  const morningtime = [
    {
      time: '08:30 AM',
      id: 0,
    },
    {
      time: '09:00 AM',
      id: 1,
    },
    {
      time: '09:30 AM',
      id: 2,
    },
    {
      time: '10:00 AM',
      id: 3,
    },
    {
      time: '10:30 AM',
      id: 4,
    },
    {
      time: '11:00 AM',
      id: 5,
    },
  ];
  const eveningtime = [
    {
      time: '05:30 PM',
      id: 6,
    },
    {
      time: '06:00 PM',
      id: 7,
    },
    {
      time: '06:30 PM',
      id: 8,
    },
    {
      time: '07:00 PM',
      id: 9,
    },
    {
      time: '07:30 PM',
      id: 10,
    },
    {
      time: '08:00 PM',
      id: 11,
    },
  ];

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
        title={'Book An Appoinment'}
        icon1={<AntDesign name="message1" size={25} />}
        icon2={<MaterialIcons name="person-outline" size={25} />}
      />
      <View
        style={{borderBottomColor: color.dark_blue, borderBottomWidth: 1}}
      />
      <View
        style={{
          width: '100%',
          marginTop: 10,
          marginLeft: 10,
        }}>
        <Text style={{fontSize: 50, color: color.dark_blue}}>April 2020</Text>
      </View>
      <View style={{flexDirection: 'row', width: '80%'}}>
        {data.map(eachObject => {
          return (
            <DayDate
              onPress={() => setSelectedItem(eachObject.id)}
              id={eachObject.id}
              selectedItem={selectedItem}
              day={eachObject.day}
              date={eachObject.date}
            />
          );
        })}
      </View>
      <View
        style={{
          width: '100%',
          marginLeft: 10,
        }}>
        <Text style={{fontSize: 50, color: color.dark_blue}}>Morning</Text>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '90%'}}>
        {morningtime.map(eachObject => {
          return <Timing 
          onPress={() => setSelectedMorningItem(eachObject.id)}
              id={eachObject.id}
              selectedTimingItem={selectedMorningItem}
          timing={eachObject.time} />;
        })}
      </View>
      <View
        style={{
          width: '100%',
          marginLeft: 10,
        }}>
        <Text style={{fontSize: 50, color: color.dark_blue}}>Evening</Text>
      </View>
      <View style={{flexDirection: 'row',flexWrap:"wrap", width: '90%'}}>
      {eveningtime.map(eachObject => {
          return <Timing 
          onPress={() => setSelectedEveningItem(eachObject.id)}
              id={eachObject.id}
              selectedTimingItem={selectedEveningItem}
          timing={eachObject.time} />;
        })}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Button
        onPress={()=>navigation.navigate("Payment")}
          Buttontext={'Make An Appoinment'}
          fontStyle={{color: 'white', marginLeft: 20}}
          style={{backgroundColor: color.dark_blue, borderRadius: 20}}
        />
      </View>
    </View>
  );
};

export default Appoinment;

const styles = StyleSheet.create({});
