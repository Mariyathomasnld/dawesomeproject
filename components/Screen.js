import React from 'react';
import Constants from 'expo-constants'
import {StyleSheet,SafeAreaView,View,Text} from 'react-native'

function Screen({children,style}) {
    return (
       <SafeAreaView style={[styles.screen,style]}>
         <Text style={style}> {children}</Text> 

       </SafeAreaView>
    );
}   const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight,
        flex:1
    
    }
    
})
    


export default Screen;