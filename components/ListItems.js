import React from 'react';
import{View,StyleSheet,Image,TouchableHighlight} from 'react-native'
import colors from '../config/colors';
import AppText from './AppText';
import { Swipeable } from 'react-native-gesture-handler';


function ListItems({title,subTitle,picture,ImageComponent,onPress,renderRightActions}) {
    return ( 
    
    
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight
    underlayColor={colors.medium}
    onPress={onPress}
    >

        <View style ={styles.container}>

          {ImageComponent}
           {picture &&<Image source={picture} style={styles.picture}/>}
             <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle&&<AppText style={styles.subTitle}>{subTitle}</AppText>}
           </View>
          </View>
          </TouchableHighlight>
          </Swipeable>
    );
}
const styles = StyleSheet.create({
  container:{
   flexDirection:'row',
   padding:20,
   backgroundColor:colors.white
    },
    detailsContainer:{
        padding:15,
      justifyContent:'center'        

    },
picture:{
    width:70,
    height:70,
   borderRadius:50,
   
},
subTitle:{
    color:colors.medium,
    fontSize:15


},
title:{
    fontSize:15,
  marginBottom:7,
  fontWeight:"bold",

}
    
})

export default ListItems;