import React from 'react'
import { StyleSheet, View } from 'react-native'
import DashboadHeader from './DashboadHeader'
import FeaturedBenefits from './FeaturedBenefits'
import Functionalities from './Functionalities'
import { LinearGradient } from 'expo-linear-gradient'


function Dashboard() {
  return (
      <View style={styles.container}>
        <LinearGradient
              colors={["#0d1021", "#603c68"]}
              style={styles.mainContent}
            >
        <View style={styles.wrapper}>
            <DashboadHeader />
            <FeaturedBenefits />
            <Functionalities/>
        </View>
    </LinearGradient>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
    },
    mainContent: {
        flex: 1
      },
    wrapper: {
        paddingHorizontal: 20,
        flex: 1
    }
})