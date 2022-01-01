import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const LIST_ITEM_HEIGHT=45;

const ListItem=({title, amount})=>{
    return(
        <View style={style.container}>
            <Text>{title}</Text>
            <View style={style.amountContainer}>
                <Text style={style.text}>{amount}</Text>
            </View>
        </View>
    );
}

const style=StyleSheet.create({
    text:{
        color:'white'
    },
    container:{
        padding:5,
        backgroundColor:'#fefefe',
        borderColor:'#e8e8e8',
        borderTopWidth:1,
        borderRadius:5,
        display:'flex', 
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        height:LIST_ITEM_HEIGHT,
    },
    amountContainer:{
        display:'flex',
        padding:5,
        paddingHorizontal:10,
        backgroundColor:'#5855DA',
        borderRadius:5,
        alignSelf:'flex-start'
    }
})

export default ListItem;