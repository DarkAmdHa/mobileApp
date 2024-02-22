import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View,StyleSheet } from 'react-native'

function AuthFooter() {
  return (
    <View style={styles.footerContainer}>
    <LinearGradient
      colors={["#2f3164", "#464892", "#2f3164"]}
      style={styles.linearGradientContainer}
    ></LinearGradient>
  </View>
  )
}

const styles = StyleSheet.create({
    footerContainer: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
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
    })

export default AuthFooter