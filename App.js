import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './src/screens/Welcome'
import Auth from './src/screens/Auth'
import Services from './src/screens/Services'
import Form from './src/screens/Form'
import Details from './src/screens/Details'
import Appoinment from './src/screens/Appoinment'
import Payment from './src/screens/Payment'
import DietAndSleep from './src/screens/DietAndSleep'
import Workout from './src/screens/Workout'
import Navigation from './src/routes/Navigation'


const App = () => {
  return (
    <Navigation/>
  )
}

export default App

const styles = StyleSheet.create({})