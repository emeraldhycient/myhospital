import { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
import { useDeviceContext } from "twrnc";

const Book = ({ route }) => {
  const { hospital } = route.params;

  useDeviceContext(tw); // <- 👋

  const [date, setdate] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [complains, setcomplains] = useState("");
  const [time, settime] = useState("");
  const [hospital_id, sethospital_id] = useState(hospital?.hospital_id);
  const [hospital_name, sethospital_name] = useState(hospital?.name);

  const handleSubmit = () => {
    if (!date || !name || !email || !complains || !time) {
      alert("Please fill all the fields");
      return;
    }
    axios
      .post("localhost:6969/api/booking", {
        date,
        name,
        email,
        complains,
        time,
        hospital_id,
        hospital_name,
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={[tw`pb-4  rounded-2xl  mx-auto`, { width: "100%" }]}>
          <Image
            source={{
              uri: "https://picsum.photos/200/300",
            }}
            style={tw`h-56 w-[100%]`}
          />
          <View style={tw`bg-gray-100 mb-4 pb-4 -mt-5 rounded-2xl px-4 pt-5`}>
            <Text style={tw`text-3xl font-extrabold`}>
              {hospital ? hospital.name : "hospital api didnt work"}
            </Text>
            <View style={tw`flex-row mt-1  items-center`}>
              <Entypo name="location-pin" style={tw`text-red-300`} size={30} />
              <Text style={tw`text-lg ml-2 font-medium text-gray-500`}>
                {hospital
                  ? `${hospital.street_address} ,${hospital.state} `
                  : "115 raldweb street"}
              </Text>
            </View>
            <View style={tw`flex-row mt-2  items-center`}>
              <Entypo name="back-in-time" style={tw`text-red-300`} size={30} />
              <Text style={tw`text-lg ml-2 font-medium text-gray-500`}>
                08:00 Am - 05:00 Pm
              </Text>
            </View>
            <View style={tw`flex-row mt-2  items-center`}>
              <FontAwesome name="bed" style={tw`text-red-300`} size={30} />
              <Text style={tw`text-lg ml-2 font-medium text-gray-500`}>
                Beds : {hospital ? hospital.hospital_bed_count : "10"} Size :{" "}
                {hospital ? hospital.hospital_bed_size : "100"}
              </Text>
            </View>
            <Text style={tw`text-2xl font-bold mt-3`}>Services</Text>
            <View style={tw`flex-row justify-around flex-wrap items-center`}>
              <View
                style={tw`flex-row justify-center mt-3  items-center bg-gray-300 py-1 px-3 rounded-full`}
              >
                <Text style={tw`text-lg  font-medium text-gray-500`}>
                  Dentistry
                </Text>
              </View>
              <View
                style={tw`flex-row justify-center mt-3  items-center bg-gray-300 py-1 px-3 rounded-full`}
              >
                <Text style={tw`text-lg  font-medium text-gray-500`}>
                  Dermatology
                </Text>
              </View>
              <View
                style={tw`flex-row justify-center mt-3  items-center bg-gray-300 py-1 px-3 rounded-full`}
              >
                <Text style={tw`text-lg  font-medium text-gray-500`}>ENT</Text>
              </View>
              <View
                style={tw`flex-row justify-center mt-3  items-center bg-gray-300 py-1 px-3 rounded-full`}
              >
                <Text style={tw`text-lg  font-medium text-gray-500`}>
                  Psychology
                </Text>
              </View>
              <View
                style={tw`flex-row justify-center mt-3  items-center bg-gray-300 py-1 px-3 rounded-full`}
              >
                <Text style={tw`text-lg  font-medium text-gray-500`}>
                  Sports medicine
                </Text>
              </View>
              <View
                style={tw`flex-row justify-center mt-3  items-center bg-gray-300 py-1 px-3 rounded-full`}
              >
                <Text style={tw`text-lg  font-medium text-gray-500`}>
                  Urology
                </Text>
              </View>
            </View>

            <View>
              <Text style={tw`text-2xl font-bold my-3`}>Location</Text>
              <MapView style={tw`h-40 w-full rounded-md`}>
                <Marker
                  coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                  }}
                  title="Hospital"
                  description={`${hospital.name}`}
                />
              </MapView>
            </View>

            <Text style={tw`text-2xl font-bold my-3`}>Book Consultation</Text>

            <TextInput
              placeholder="Your Name"
              value={name}
              onChangeText={(text) => setname(text)}
              style={tw`h-14 w-[95] my-2 px-1 border border-red-200 rounded-lg bg-gray-200`}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setemail(text)}
              style={tw`h-14 w-[95] my-2 px-1 border border-red-200 rounded-lg bg-gray-200`}
            />
            <TextInput
              placeholder="Complaint"
              value={complains}
              onChangeText={(text) => setcomplains(text)}
              style={tw`h-14 w-[95] my-2 px-1 border border-red-200 rounded-lg bg-gray-200`}
            />
            <View style={tw`flex-row justify-evenly`}>
              <TextInput
                placeholder="Date e.g (2020-12-12)"
                value={date}
                onChangeText={(text) => setdate(text)}
                style={tw`h-14 w-[47] ml-2 px-1 border border-red-200 rounded-lg bg-gray-200`}
              />
              <TextInput
                placeholder="Time e.g 10:00 AM"
                value={time}
                onChangeText={(text) => settime(text)}
                style={tw`h-14 w-[48] ml-2 px-1 border border-red-200 rounded-lg bg-gray-200`}
              />
            </View>
            <TouchableOpacity onPress={(e) => handleSubmit()}>
              <View style={tw`bg-blue-400  p-2 rounded-lg mt-4 py-4`}>
                <Text style={tw`text-center text-white text-lg font-bold`}>
                  Book Consultation
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Book;
