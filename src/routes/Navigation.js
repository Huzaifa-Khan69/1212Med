import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Auth from '../screens/Auth';
import Details from '../screens/Details';
import Form from '../screens/Form';
import Services from '../screens/Services';
import Appoinment from '../screens/Appoinment';
import Payment from '../screens/Payment';
import DietAndSleep from '../screens/DietAndSleep';
import Workout from '../screens/Workout';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Appoinment" component={Appoinment} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="DietAndSleep" component={DietAndSleep} />
        <Stack.Screen name="Workout" component={Workout} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})