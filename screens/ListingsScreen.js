import React from 'react';
import { FlatList,StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';


const listings =[
    {
       id :1,
       title:"red jacket for sale",
       price:100,
       picture:require('../assets/jacket.jpg')
},
{
    id :2,
    title:"Couch in great codition",
    price:1000,
    picture:require('../assets/couch.jpg')
}
]

function ListingsScreen(props) {


    return (
       <Screen style={styles.screen}>
           <FlatList
           data={listings}
           keyExtractor={listing=>listing.id.toString()}
           renderItem={({item})=><Card
           title={item.title}
           subTitle={"$" +item.price}
           picture={item.picture}
           />}
           />


       </Screen>
    );
}
const styles = StyleSheet.create({

    screen :{

        padding:20,
        backgroundColor:colors.grey,

    }

    
})

export default ListingsScreen;