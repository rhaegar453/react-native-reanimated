import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


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
        padding:10,
        backgroundColor:'#fefefe',
        borderColor:'#e8e8e8',
        borderWidth:1, 
        margin:5, 
        borderRadius:5,
        display:'flex', 
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
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