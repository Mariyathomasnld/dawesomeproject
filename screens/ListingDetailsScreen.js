import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import Card from '../components/Card';
import ListItems from '../components/ListItems';






function ListingDetailsScreen(props) {
    return (
        <View>
              <Card 
             picture={require('../assets/jacket.jpg')}
             title="my yellowish shirt"
             subTitle="100$"/>

             <View style={styles.userContainer}>
                 
             <ListItems
             picture={require('../assets/mosh.jpg')}
             title="Mosh Hamedani"
             subTitle="5 listings"/>
             </View>
            
             
           </View>
           

    );
}
const styles = StyleSheet.create({
    userContainer:{
        marginTop:40
    }
    
})

export default ListingDetailsScreen;