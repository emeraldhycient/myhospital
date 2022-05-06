import { StyleSheet, Text, View, Image } from "react-native";
import tw from "twrnc";

const Greetings = () => {
  return (
    <View style={tw`mb-5 flex-row justify-between items-center`}>
      <View>
        <Text style={tw`text-lg font-semibold mb-2`}>Hello</Text>
        <Text style={tw`text-3xl font-extrabold`}>User 123</Text>
      </View>
      <View
        style={tw`w-10 h-10 border border-red-200 p-1 rounded-full bg-gray-100`}
      >
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={tw`h-full w-full rounded-full`}
        />
      </View>
    </View>
  );
};

export default Greetings;

const styles = StyleSheet.create({});
