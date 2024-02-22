import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from "../store/auth-context";
import Feed from "../components/Posts/Feed";
import BottomNav from "../components/ui/BottomNav";
import Benefits from "../components/Benefits/Benefits";
import Settings from "../components/Settings/Settings";



const Homepage = (props) => {
  const { token, logout } = useContext(AuthContext);

  const [currentMainPage, setCurrentMainPage] = useState("Home")

  const handleChange = (page) =>{
    console.log(page)
    setCurrentMainPage(page)
  }
  return (
      <View style={styles.container}>
        
        <View style={styles.mainContent}>
          {currentMainPage === "Home" ? (
            <Feed />
          ) : currentMainPage === "Benefits" ? (
            <Benefits />
            ) :   currentMainPage === "Settings" && (
              <Settings />
          )}
        </View>
        
        <BottomNav currentMainPage={currentMainPage} onChange={handleChange}/>
      </View>
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
  mainContent: {
    justifyContent: "start",
    alignItems: "center",
    flex: 15,
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
    fontSize: 12
  }
});

export default Homepage;
