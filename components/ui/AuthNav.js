import { StyleSheet, View,
  TouchableOpacity,
  Text
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';


function AuthNav({isLogin}){
  const navigation = useNavigation();

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace('Register');
    } else {
      navigation.replace('Login');
    }
  }


  return(
    <View style={styles.authNavContainer}>
    <LinearGradient
      colors={["#2f3164", "#464892", "#2f3164"]}
      style={styles.linearGradientContainer}
    >
      <TouchableOpacity
        style={styles.authNavLinksContainer}
        onPress={()=>{isLogin && switchAuthModeHandler()}}
      >
        <Text style={isLogin ? styles.authNavLinks : [styles.authNavLinks, styles.activeLink]}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.authNavLinksContainer}
        onPress={()=>{!isLogin && switchAuthModeHandler()}}
      >
        <Text style={!isLogin ? styles.authNavLinks : [styles.authNavLinks, styles.activeLink]}>
          Sign In
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  </View>
  )
}


export default AuthNav;

const styles = StyleSheet.create({
  authNavContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    backgroundColor: "#2f3164",
    overflow: "hidden",
  },
  linearGradientContainer: {
    width: "100%",
    height: "100%",
    paddingTop: 150,
    paddingBottom: 15,
    paddingHorizontal: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  authNavLinksContainer: {
    width: "50%",
  },
  authNavLinks: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  activeLink: {
    textDecorationLine: "underline",
  },
});
