import React from "react";
import {
  Platform,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import DogIcon from '../components/DogIcon'


export default function HomeScreen() {
  return (
    <ImageBackground
    style={styles.img}
    resizeMode="cover"
    source={require("../assets/images/nana-project.jpg")}>
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text style={styles.words}>Dog-Pedia</Text>
      <DogIcon name='dog-side' style={styles.dog}/>
    </View>
    </ImageBackground>
  );
}
HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center"
  },
  words: {
    flex: 3,
    fontFamily: "space-mono",
    fontSize: 40,
    color: "#fffaf0",
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    marginTop:100
  }
});
