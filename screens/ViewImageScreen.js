import React from 'react';
import {View,Image,StyleSheet} from "react-native"

import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function ViewImageScreen(props) {
    return (


        <View style={styles.container}> 

        <View style = {styles.closingIcon}> <MaterialCommunityIcons name="close" color="white" size={30}/></View>
        <View style = {styles.deleteIcon}><MaterialCommunityIcons name="trash-can-outline" color="white" size={30}/> </View>
            <Image resizeMode='contain' source = {require("../assets/chair.jpg")} style={styles.image}  />

        
        </View>
    );
}


export default ViewImageScreen;

const styles = StyleSheet.create({

    closingIcon:{
    position:"absolute",
    top :30,
    left:30,     
    

    },
    deleteIcon:{
    position:"absolute",
    top :30,
    right:30,     
    

    },
   

    container :{

        backgroundColor :"#000",
        flex:1,



    },
 image:{
       width :'100%',
       height :'100%'
 }
    
})