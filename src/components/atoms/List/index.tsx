import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Chevron from '../../../assets/chevronW.png';
import ListItem from '../ListItem';

const List = ({ label, items }) => {
  return (
    <View>
      <View style={style.container}>
        <Text>{label}</Text>
        <View style={style.circle}>
          <Image style={style.image} source={Chevron} />
        </View>
      </View>
      {items.map(item=>(
          <ListItem title={item.title} amount={item.amount}/>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
  },
  image: {
    height: 10,
    width: 10,
  },
  circle: {
    display: 'flex',
    alignSelf: 'flex-start',
    height: 25,
    width: 25,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
  },
});

export default List;
