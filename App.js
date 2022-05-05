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
import { Switch } from 'react-native';
import AppPicker from './components/AppPicker';


export default function App() {

  const [firstName,setFirstName]=useState('');
  const [isNew,setIsNew]=useState(false);
  return (
  <Screen>
   
  <Switch value={isNew} onValueChange={(newValue)=>setIsNew(newValue)}/>
  <AppPicker placeHolder="category" icon="apps"></AppPicker>
  <AppTextInput placeholder="email" icon="email"/>
  </Screen>
    
  ) 
}

