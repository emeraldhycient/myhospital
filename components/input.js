import { StyleSheet, View, TextInput } from "react-native";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";

const Input = () => {
  return (
    <View
      style={[
        tw`h-12   rounded-lg bg-gray-200 flex-row  items-center border border-red-300`,
        { width: "98%" },
      ]}
    >
      <AntDesign name="search1" style={tw`text-red-300`} size={30} />
      <TextInput
        placeholder="search bookings by name"
        style={[tw`h-12  rounded-lg bg-gray-200`, { width: "90%" }]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
