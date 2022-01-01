import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App=({})=>{
  return(
    <SafeAreaView>
      <Text style={style.text}>Hello World</Text>
    </SafeAreaView>
  );
}
const style=StyleSheet.create({
  text:{
    fontSize:16, 
    fontWeight:'bold'
  }
})



export default App;