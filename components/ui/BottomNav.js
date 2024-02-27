import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import IconButton from "./IconButton";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthorizedNavContext } from "../../screens/Homepage";

function BottomNav() {
  const {currentScreen,setCurrentScreen} = useContext(AuthorizedNavContext);

  const navigation = useNavigation();
  
  console.log(currentScreen)
  const mainPages = [
    {
      title: "Home",
      icon: "home",
      screenName: "Dashboard"
    },
    {
      title: "Social",
      icon: "compass",
      screenName: "Feed"
    },
    {
      title: "Benefits",
      icon: "gift",
      screenName: "Benefits"
    },
    {
      title: "Redeem",
      icon: "wallet",
      screenName: "Company Store"
    },
    {
      title: "Account",
      icon: "person-circle",
      screenName: "Settings"
    },
  ];

  const handleNavChange = (screen)=>{
    navigation.replace(screen)
    setCurrentScreen(screen);
  }
  return (
    <View style={styles.bottomNavBar}>
      {mainPages.map((page, index) => (
        <TouchableOpacity
          key={`${index}-${page.title}`}
          style={styles.navItem}
          onPress={handleNavChange.bind(this, page.screenName)}
        >
          <IconButton
            icon={page.icon}
            color={page.screenName === currentScreen ? "#ffd5f2" : "#ccd"}
            size={20}
          />
          <Text
            style={[
              styles.navItemText,
              page.screenName === currentScreen && styles.activeNavItem,
            ]}
          >
            {page.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333", // Change color as needed
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
    paddingVertical: 10,

  },
  navItemText: {
    color: "#fff",
    fontSize: 12,
  },
  activeNavItem: {
    color: "#ffd5f2",
  },
});

export default BottomNav;
