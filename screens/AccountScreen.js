import React from 'react';
import {View,StyleSheet,FlatList} from 'react-native'
import Screen from '../components/Screen';
import ListItems from '../components/ListItems';


import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';


const menuItems =[
    {title:"My Listings",
    icon:{
        name: "format-list-bulleted",
        backgroundColor: colors.primaryColor


    }
 },
 {title:"My Messages",
 icon:{
     name: "email",
     backgroundColor: colors.secondaryColor


 }
}
]


function AccountScreen(props) {
    return (

        
        <Screen style={styles.screen}>
            <View style ={styles.container}>
            <ListItems
             title = "Mosh Hamedani"
             subTitle= "jnmariya@gmail.com"
             picture={require('../assets/mosh.jpg')}
            />
            </View>
            <View style={styles.container}>
                <FlatList
                data={menuItems}
                keyExtractor={menuItem=>menuItem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item})=>
            
                  <ListItems
                  title = {item.title}
                  ImageComponent={
                      <Icon name={item.icon.name} backgroundColor = {item.icon.backgroundColor}/>
                  }  
                  
                  />
            }
                />

            </View>
            <ListItems
            
            title ="Log Out"
            ImageComponent={<Icon name="logout"backgroundColor='#ffe66d'/>}
            
            />
       </Screen>
       
        
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
        backgroundColor:colors.grey
    }
    
})

export default AccountScreen;