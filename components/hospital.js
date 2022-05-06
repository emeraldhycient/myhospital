import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Modal,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";

const Hospital = ({ hospital }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={[tw`bg-red-200 h-56 rounded-2xl my-2 mx-auto`, { width: "47%" }]}
    >
      <Image
        source={{
          uri: "https://picsum.photos/200/300",
        }}
        style={tw`h-32 w-[100%] rounded-2xl`}
      />
      <View style={tw`bg-gray-100 h-28 -mt-5 rounded-2xl px-2 pt-2`}>
        <Text style={tw`text-lg font-bold`}>
          {hospital ? hospital.name : "hospital api didnt work"}
        </Text>
        <View style={tw`flex-row mt-2  items-center`}>
          <Entypo name="back-in-time" style={tw`text-red-300`} size={22} />
          <Text style={tw`text-base ml-2 font-medium text-gray-500`}>
            08:00 Am - 05:00 Pm
          </Text>
        </View>
        <View style={tw`flex-row mt-1  items-center`}>
          <Entypo name="location-pin" style={tw`text-red-300`} size={22} />
          <Text style={tw`text-base ml-2 font-medium text-gray-500`}>
            {hospital ? hospital.street_address : "115 raldweb street"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Hospital;

const styles = StyleSheet.create({});
