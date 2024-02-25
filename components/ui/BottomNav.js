import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import IconButton from "./IconButton"

function BottomNav({currentMainPage, onChange}) {

    const mainPages = [
      {
        title: "Home",
        icon: "home"
      },
      {
        title: "Social",
        icon: "compass"
      },
        {
            title: "Benefits",
            icon: "gift"
        },
        {
            title: "Redeem",
            icon: "wallet"
        },
        {
            title: "Account",
            icon: "person-circle"
        },
    ]
  return (
    <View style={styles.bottomNavBar}>
        {mainPages.map((page,index)=>(
            <TouchableOpacity key={`${index}-${page.title}`} style={styles.navItem} onPress={e=>onChange(page.title)}>
            <IconButton
                icon={page.icon}
                color={page.title === currentMainPage ? "#2f3164" : "#ccd"}
                size={20}
            />
            <Text style={[styles.navItemText, page.title === currentMainPage && styles.activeNavItem]}>{page.title}</Text>
            </TouchableOpacity>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    bottomNavBar: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#333", // Change color as needed
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
      color: "#fff",
      fontSize: 12
    },
    activeNavItem: {
        color: "#2f3164",
    }
  });


export default BottomNav