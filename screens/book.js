import { View, Text } from "react-native";
import React from "react";

const Book = ({ route, navigation }) => {
  const { hospital } = route.params;

  return (
    <View>
      <Text>book</Text>
    </View>
  );
};

export default Book;
