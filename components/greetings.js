import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

const Greetings = () => {
  return (
    <View style={tw`mb-5`}>
      <Text style={tw`text-lg font-semibold mb-2`}>Hello</Text>
      <Text style={tw`text-3xl font-extrabold`}>User 123</Text>
    </View>
  );
};

export default Greetings;

const styles = StyleSheet.create({});
