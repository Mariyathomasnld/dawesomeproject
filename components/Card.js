import React from 'react';
import{View,StyleSheet,Image} from 'react-native'
import colors from '../config/colors';
import AppText from './AppText';


function Card({title,subTitle,picture}) {
    return (
        <View style ={styles.card}>

            <Image source={picture} style={styles.picture}/>
             <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
           </View>
          </View>
    );
}
const styles = StyleSheet.create({
  card:{
    width:"100%",
    borderRadius:15,
    backgroundColor:"white",
    marginBottom:20,
    overflow:'hidden'
    },
    detailsContainer:{
        padding:20          

    },
picture:{
    width:"100%",
    height:200
},
subTitle:{
    color:colors.secondaryColor,
    fontWeight:"bold"

},
title:{
  marginBottom:7

}
    
})

export default Card;