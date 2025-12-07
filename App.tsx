import { StyleSheet, Text, View } from "react-native";
import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import { NavigationContainer } from "@react-navigation/native";
const Tab = createNativeBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            title: "Home",
            tabBarIcon: {
              type: "image",
              source: require("./assets/home.png"),
              tinted: true,
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: true,
            title: "Profile",
            tabBarIcon: {
              type: "sfSymbol",
              name: "heart",
            },
            // tabBarIcon: {
            //   type: "drawableResource",
            //   name: "sunny",
            // },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
