import { useState } from "react";
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SocialIcon } from "react-native-elements";
const { width, height } = Dimensions.get("window");
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Your login logic goes here
    console.log("Username:", username);
    console.log("Password:", password);
    // Add your authentication logic here
  };
  return (
    <View className="flex-1 mt-20 items-center bg-gray-100">
      <Text className="text-2xl font-bold mb-8">Login</Text>

      <View className="mx-5 shadow w-4/5 mb-4">
        <View className="flex-row items-center rounded-md  p-1 bg-[#e6e6e6]">
          <TextInput
            placeholder="Username"
            className="p-4 flex-1 font-semibold text-gray-700"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>
      </View>

      <View className="mx-5 shadow w-4/5 mb-4">
        <View className="flex-row items-center rounded-md  p-1 bg-[#e6e6e6]">
          <TextInput
            placeholder="Password"
            className="p-4 flex-1 font-semibold text-gray-700"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Text style={{ color: "grey" }}>
              {showPassword ? "Hide" : "Show"}{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mx-5 shadow w-4/5 mb-4">
        <Text className="text-right text-xs">Forgot Password?</Text>
      </View>
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded rounded-md w-90 m-5 mb-7"
        style={{ width: width * 0.8 }}
        onPress={handleLogin}
      >
        <Text className="text-white font-bold text-center">Login</Text>
      </TouchableOpacity>

      <View className="mx-5 shadow w-4/5 mb-7">
        <Text className="text-center text-sm text-gray-600">
          --------- Or Continue With ----------
        </Text>
      </View>
      <View className="flex-row">
        {/* <TouchableOpacity onPress={handleLogin} > */}
          <SocialIcon
            className="text-white font-bold text-center  rounded rounded-md w-90 m-1"
            style={{ width: width * 0.4 }}
            title="Facebook"
            button
            type="facebook"
            
          />
        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={handleLogin} > */}
          <SocialIcon
            className="text-white font-bold text-center  rounded rounded-md w-90 m-1"
            style={{ width: width * 0.4 }}
            title="Google"
            button
            type="google"
          />
        {/* </TouchableOpacity> */}
      </View>
      <View
        className="absolute bottom-10 w-full"
        style={{ marginTop: height * 0.2 }}
      >
        <Text className="text-center text-sm text-gray-600">
          Dont have a Account ? <Text className="font-bold">Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
