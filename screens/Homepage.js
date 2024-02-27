import React, { createContext, useContext, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { AuthContext } from "../store/auth-context";
import Feed from "../components/Posts/Feed";
import BottomNav from "../components/ui/BottomNav";
import Benefits from "../components/Benefits/Benefits";
import Settings from "../components/Settings/Settings";
import Dashboard from "../components/Dashboard/Dashboard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Dashboard/Header";
import Schedules from "./Schedules";
import Store from "./Store";
import HolidayBook from "./HolidayBook";
import Payslip from "./Payslip";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createNativeStackNavigator();

export const AuthorizedNavContext = createContext({
  currentScreen: "Dashboard",
  setCurrentScreen: () => {},
});

function AuthorizedNavContextProvider({ children }) {
  const [currentScreen, setCurrentScreen] = useState("Dashboard");

  const value = {
    currentScreen,
    setCurrentScreen,
  };

  return (
    <AuthorizedNavContext.Provider value={value}>
      {children}
    </AuthorizedNavContext.Provider>
  );
}

function AuthorizedStack() {
  return (
    <AuthorizedNavContextProvider>
      <StatusBar backgroundColor="#333" barStyle="light-content" />
      <View style={{ width: "100%", flex: 1 }}>
        <Header />
        <LinearGradient
              colors={["#0d1021", "#603c68"]}
              style={{flex: 1}}
            >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Schedules" component={Schedules} />
            <Stack.Screen name="Company Store" component={Store} />
            <Stack.Screen name="Holiday Book" component={HolidayBook} />
            <Stack.Screen name="Payslip" component={Payslip} />
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="Benefits" component={Benefits} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        </LinearGradient>
       
        <BottomNav />
      </View>
    </AuthorizedNavContextProvider>
  );
}

const Homepage = (props) => {
  const { token, logout } = useContext(AuthContext);

  const [currentMainPage, setCurrentMainPage] = useState("Dashboard");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        
          <AuthorizedStack />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#397af8",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  bottomNavBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff", // Change color as needed
    paddingVertical: 5,
    paddingHorizontal: 20,
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -3,
    },

    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 8,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  navItemText: {
    color: "#333",
    fontSize: 12,
  },
});

export default Homepage;
