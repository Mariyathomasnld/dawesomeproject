import React from 'react';
import {ImageBackground,StyleSheet,View,Image, Text} from 'react-native'

import colors from '../config/colors';
import AppButton from '../components/AppButton';


function WelcomeScreen(props) {
    return (

        <ImageBackground
        blurRadius={10}
        style ={styles.background} 
        source ={require('../assets/background.jpg')}>

            <View style ={styles.logoContainer}>

            <Image source = {require("../assets/logo-red.png")} style = {styles.logo}/>
            ``
            
            <Text style ={styles.tagLine}> Sell what you Dont Need </Text>
            </View >

            <View style = {styles.buttonContainer}>

            <AppButton title = "Login"/>
            <AppButton title = "Register" color="secondaryColor"  />
            
            <View style = {styles.registerButton}>
            </View>

            </View>

            



        </ImageBackground> 
        
    );
}

const styles = StyleSheet.create({
    background:{
         flex:1,
         justifyContent:"flex-end",
         alignItems:"center"

},

buttonContainer:{

    padding:20,
    width:"100%",
    


},

logo:{

    width:40,
    height:40,
    
    },
   logoContainer:{
    position:"absolute",
    top:70,
    alignItems:"center"


   },
   tagLine :{
       fontSize:25,
       fontWeight:"bold",
       paddingVertical:20,

   },

    
})

export default WelcomeScreen;