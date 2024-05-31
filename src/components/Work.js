import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../theme/color';

const Work = ({img, num,Workout}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20,
        height: 250,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginHorizontal: 10,
        }}>
        <View
          style={{
            backgroundColor: color.light,
            borderRadius: 30,
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {img ? img : null}
        </View>
        <Text
          style={{
            fontSize: 30,
            color: color.dark_blue,
            textAlignVertical: 'center',
            marginLeft: 15,
          }}>
          Your Day {num} Workout
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: color.black,
          borderBottomWidth: 1,
          marginTop: 15,
        }}
      />
      <View>
        <Text style={{fontSize: 40, color: color.dark_blue, marginLeft: 20}}>
          {Workout}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: color.dark_blue,
              width: 15,
              height: 15,
              borderRadius: 50,
            }}
          />
          <Text style={{fontSize: 20, textAlign: 'center', marginLeft: 15}}>
            Lorem Ipsum is simply dummy text
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: color.dark_blue,
              width: 15,
              height: 15,
              borderRadius: 50,
            }}
          />
          <Text style={{fontSize: 20, textAlign: 'center', marginLeft: 15}}>
            Lorem Ipsum is simply dummy text
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: color.dark_blue,
              width: 15,
              height: 15,
              borderRadius: 50,
            }}
          />
          <Text style={{fontSize: 20, textAlign: 'center', marginLeft: 15}}>
            Lorem Ipsum is simply dummy text
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: color.dark_blue,
              width: 15,
              height: 15,
              borderRadius: 50,
            }}
          />
          <Text style={{fontSize: 20, textAlign: 'center', marginLeft: 15}}>
            Lorem Ipsum is simply dummy text
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Work;

const styles = StyleSheet.create({});
