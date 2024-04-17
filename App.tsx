import React, { useState } from "react";
import { StyleSheet, Switch, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";
import MyKeyboard from "./src/components/MyKeyboard";
import AboutMe from "./src/components/AboutMe";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <AntDesign name="home" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="About Me"
            component={AboutMe}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <AntDesign name="user" size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

function HomeScreen() {
  const [theme, setTheme] = useState("light");

  return (
    <SafeAreaView
      style={
        theme === "light"
          ? styles.container
          : [styles.container, { backgroundColor: "black" }]
      }
    >
      <Switch
        value={theme === "dark"}
        onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <MyKeyboard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
