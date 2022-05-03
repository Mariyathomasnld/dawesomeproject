import React,{useState} from 'react';
import { FlatList,} from 'react-native';
import {StyleSheet,View } from 'react-native';
import ListItems from '../components/ListItems';

import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import { RefreshControl } from 'react-native';



const initialMessages=[
    {
    id :1,
    title:'T1',
    description:'D1',
    image:require('../assets/mosh.jpg')
},
{
    id :2,
    title:'T2',
    description:'D2',
    image:require('../assets/mosh.jpg')
},


]



function MessagesScreen(props) {
const [messages,setmessages]=useState(initialMessages)
const [refreshing,setRefreshing]=useState(false)
const handleDelete=(message)=>{

    const newMessages=messages.filter( m=>m.id!==message.id)
    setmessages(newMessages)
}


    return (
      <Screen> 

          <FlatList
         
          data ={messages}
        keyExtractor={message=>message.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
   
        renderItem={
         ({item})=>
        <ListItems
        title={item.title}
        subTitle={item.description} 
        picture={item.image}
        onPress={()=>console.log("message selected",item)}
        renderRightActions={()=><ListItemDeleteAction onPress={()=>handleDelete(item)}/>}/>}
        refreshControl={ <RefreshControl 
         refreshing={refreshing}
             onRefresh={()=>{
                setmessages([
                    {
                        id :1,
                        title:'T1',
                        description:'D1',
                        image:require('../assets/mosh.jpg')
                    },
    
                
                ])
            }}
        />  }
    
        
        
        
        />
 </Screen>
    );
}
const styles = StyleSheet.create({
    
})  


export default MessagesScreen;