import React from 'react';
import { TouchableOpacity,StyleSheet,View,Text } from 'react-native';

import colors from '../config/colors';


function AppButton({title,onPress,color="primaryColor"}) {
    return (


   
      <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        

      </TouchableOpacity>

       
    );
}


const styles = StyleSheet.create({
  button :{ backgroundColor: colors.primaryColor,
    borderRadius:25,
    width:'100%',
    justifyContent:"center",
    alignItems:"center",
    padding:15,
    marginVertical:10
    
   },
   text:{
    color:colors.white,
    fontSize:18,
    textTransform:"uppercase",
    fontWeight:"bold"
    


   }

    
})

export default AppButton;