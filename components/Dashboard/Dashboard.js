import React from 'react'
import { StyleSheet, View } from 'react-native'
import DashboadHeader from './DashboadHeader'
import FeaturedBenefits from './FeaturedBenefits'
import Functionalities from './Functionalities'
import Header from './Header'

function Dashboard() {
  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.wrapper}>
            <DashboadHeader />
            <FeaturedBenefits />
            <Functionalities/>

        </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1
    },
    wrapper: {
        paddingHorizontal: 20,
        flex: 1
    }
})