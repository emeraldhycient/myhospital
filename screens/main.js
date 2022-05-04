import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import tw from "twrnc";
import Greetings from "../components/greetings";
import Hospital from "../components/hospital";
import Input from "../components/input";

const Main = () => {
  return (
    <SafeAreaView>
      <View style={tw`mt-6`}>
        <Greetings />
        <Input />
        <View style={tw`flex-row justify-between items-center mt-6`}>
          <Hospital />
          <Hospital />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({});
