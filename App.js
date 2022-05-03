import { StatusBar } from 'expo-status-bar';
import { useState } from 'react/';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import MessagesScreen from './screens/MessagesScreen';
import ListItemSeparator from './components/ListItemSeparator';
import Screen from './components/Screen'
import Icon from './components/Icon';
import ListItems from './components/ListItems';
import AccountScreen from './screens/AccountScreen';
import ListingsScreen from './screens/ListingsScreen';
import AppTextInput from './components/AppTextInput';


export default function App() {

  const [firstName,setFirstName]=useState('')
  return (
  <Screen>
   <AppTextInput placeholder="username" icon="email"/>
  </Screen>
    
  ) 
}

