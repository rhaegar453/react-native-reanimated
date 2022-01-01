import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import List from "./src/components/atoms/List";
import ListItem from "./src/components/atoms/ListItem";



const mockList=[
  {
    label: "Total Points",
    items: [
      { title: "Nathaniel Fitzgerald", amount: "$3.45" },
      { title: "Lawrence Fullter Fitzgerald", amount: "$3.45" },
      { title: "Jacob Mullins", amount: "$3.45" },
      { title: "Jesus Lewis", amount: "$3.45" },
      { title: "Johnny Marr", amount: "$2.56" },
    ],
  },
  {
    label: "Total Points",
    items: [
      { title: "Nathaniel Fitzgerald", amount: "$3.45" },
      { title: "Lawrence Fullter Fitzgerald", amount: "$3.45" },
      { title: "Jacob Mullins", amount: "$3.45" },
    ],
  },
  {
    label: "Total Points",
    items: [
      { title: "Nathaniel Fitzgerald", amount: "$3.45" },
      { title: "Lawrence Fullter Fitzgerald", amount: "$3.45" },
    ],
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f6",
    padding: 16,
    overflow:'scroll'
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

const Accordion = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Markets</Text>
      {mockList.map((item, index)=>(
        <List label={item.label} items={item.items}  key={index}/>
      ))}
      <ListItem title={'Hello World'} amount={200} ></ListItem>
    </SafeAreaView>
  );
};

export default Accordion;