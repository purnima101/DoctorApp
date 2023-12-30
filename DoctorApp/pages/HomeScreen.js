import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
import { SafeAreaView } from "react-native-safe-area-context";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
const HomeScreen = () => {
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />

      <Image
        source={require("../assets/images/stetosscope.webp")}
        style={{ height: height * 0.3 }}
        className="w-full absolute -top-5 opacity-10"
      />
      <SafeAreaView className={ios ? "-mb-8" : "mt-8"}>
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center">
          {/* <Image source={require('../assets/images/avatar.png')} 
            className="h-9 w-9 rounded-full" /> */}

          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={"blue"} />
            <Text className="font-semibold text-base">New York, NYC</Text>
          </View>
          <BellIcon size="27" color="black" />
        </View>
        {/* search bar */}
        <View className="mx-5 shadow" style={{ marginTop: height * 0.06 }}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-4 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{ backgroundColor: "white" }}
            >
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
