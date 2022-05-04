import { StyleSheet, View, TextInput } from "react-native";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";

const Input = () => {
  return (
    <View
      style={tw`h-12 w-[100] rounded-lg bg-gray-200 flex-row  items-center border border-gray-300`}
    >
      <AntDesign name="search1" style={tw`text-red-300`} size={30} />
      <TextInput
        placeholder="serach hospital"
        style={tw`h-12 w-[90] rounded-lg bg-gray-200`}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
