import { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import axios from "axios";
import tw from "twrnc";
import Greetings from "../components/greetings";
import Hospital from "../components/hospital";
import Input from "../components/input";

const Main = () => {
  //remember app url to env to avoid duplication
  const [hospitals, sethospitals] = useState([]);
  const apiurl = `http://www.communitybenefitinsight.org/api/`;

  useEffect(() => {
    axios
      .get(`${apiurl}get_hospitals.php`)
      .then((res) => {
        const data = Object.values(res.data);
        const slicedArray = data.slice(0, 10);
        sethospitals(slicedArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={tw`mt-6`}>
        <Greetings />
        <Input />
        <ScrollView>
          <View
            style={tw`flex-row flex-wrap justify-between items-center mt-6`}
          >
            {hospitals.length > 0 ? (
              hospitals.map((hospital, index) => {
                return <Hospital key={index} hospital={hospital} />;
              })
            ) : (
              <>
                <ActivityIndicator size="large" />
                <Hospital />
              </>
            )}
            <Hospital />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({});
