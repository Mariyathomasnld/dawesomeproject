import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TextInput,StyleSheet,View } from 'react-native';

import defaultStyles from '../config/styles'

import AppText from './AppText';
import { TouchableWithoutFeedback,Modal,Button } from 'react-native';
import {useState} from 'react'


 



function AppPicker({icon,placeHolder}) {

    const [modalVisible,setModalVisible]=useState(false)
    return (

        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={styles.container}>
          {icon&&<MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium}style={styles.icon}/>}
          <AppText style={styles.text}> {placeHolder}</AppText>
          {icon&&<MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium}/>}
</View>
</TouchableWithoutFeedback>
<Modal visible={modalVisible} animationType="slide" >
<Button title="close" onPress={()=>setModalVisible(false)}></Button>

</Modal>


</>
    );
}
const styles = StyleSheet.create({
    container :{
        backgroundColor:defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:10

    },
    icon:{
    marginRight:10

    },
    text:{
        flex:1
    }
 
})
export default AppPicker;
 
