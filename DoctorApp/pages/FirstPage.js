import { Button, Text, View } from "react-native";
import {LinearGradient} from 'expo-linear-gradient'
const FirstPage = ({navigation}) => {
  return (
    // <View className="flex-1 bg-grey-200">
    //   <Text>FirstPage</Text>
    // </View>
    <LinearGradient
        className="flex-1"
        colors={['#7BD3EA','#E6B9DE']}>
            <View className="flex-1 justify-center items-center height-1000">
                <Text style={{
                    fontSize:46,
                    fontWeight:800,
                    color:'white'
                }}>Welcome</Text>
            </View>
            <View className="flex-1 justify-center items-center">
                <Button title="Login" onPress={()=>navigation.navigate("Login")} />
            </View>

    </LinearGradient>
  );
};

export default FirstPage;
