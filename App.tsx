import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ListItem from "./src/components/atoms/ListItem";

import List, { List as ListModel } from "./src/components/molecules/ListContainer";

const list: ListModel = {
  name: "Total Points",
  items: [
    { name: "Nathaniel Fitzgerald", points: "$3.45" },
    { name: "Lawrence Fullter Fitzgerald", points: "$3.45" },
    { name: "Jacob Mullins", points: "$3.45" },
    { name: "Jesus Lewis", points: "$3.45" },
    { name: "Johnny Marr", points: "$2.56" },
  ],
};

const list2: ListModel = {
  name: "Total Points",
  items: [
    { name: "Nathaniel Fitzgerald", points: "$3.45" },
    { name: "Lawrence Fullter Fitzgerald", points: "$3.45" },
    { name: "Jacob Mullins", points: "$3.45" },
  ],
};

const list3: ListModel = {
  name: "Total Points",
  items: [
    { name: "Nathaniel Fitzgerald", points: "$3.45" },
    { name: "Lawrence Fullter Fitzgerald", points: "$3.45" },
  ],
};

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
      <ListItem title={'Hello World'} amount={200}></ListItem>
    </SafeAreaView>
  );
};

export default Accordion;