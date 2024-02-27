import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconButton from '../ui/IconButton';

function Header() {
  return (
    <View style={styles.header}>
      <IconButton  color="#fff" size={24} icon="menu" />
      <Text style={styles.logo}>Grantrow</Text>
      <View style={styles.notificationContainer}>
        <IconButton color="#fff" size={24} icon="notifications-outline" />
        <View style={styles.notificationDot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#333',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff"
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationDot: {
    width: 8,
    height: 8,
    backgroundColor: '#ffd5f2',
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default Header;
