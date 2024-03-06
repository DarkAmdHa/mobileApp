import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import UserAvatar from '../ui/UserAvatar';

function DashboardHeader() {
  const [userName, setUserName] = useState("Test");
  const [rewardPoints, setRewardPoints] = useState(10);

  return (
    <View style={styles.container}>
      {/* User Info */}
      <View style={styles.userInfo}>
        <Text style={styles.welcomeBack}>Welcome Back, {userName}!</Text>
        <View style={styles.pointsWrapper}>
          <Text style={styles.currentPts}>Current Points</Text>
          <Text style={styles.redeemPoints}>{rewardPoints}</Text>
        </View>
      </View>


      <UserAvatar />
      {/* <CompanyLogo/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  companyName: {
    marginLeft: 10,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  userInfo: {
    alignItems: 'flex-start',
  },
  welcomeBack: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  currentPts: {
    fontSize: 16,
    color: '#fff',
  },
  pointsWrapper: {
  },
  redeemPoints: {
    color: "#ffd5f2",
    fontWeight: "bold",
    fontSize: 32,
  },
});

export default DashboardHeader;
