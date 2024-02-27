import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HolidayBookingForm from '../components/ui/HolidayBookingForm';
import ViewHolidays from '../components/ui/ViewHolidays';

const HolidayBook = () => {
  const [tab, setTab] = useState('Book Holiday');

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0d1021', '#603c68']} style={styles.mainContent}>
        <View style={styles.wrapper}>
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, tab === 'Book Holiday' && styles.activeTab]}
              onPress={() => setTab('Book Holiday')}
            >
              <Text style={[styles.tabText, tab === 'Book Holiday' && styles.activeTabText]}>Book Holiday</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, tab === 'View Holidays' && styles.activeTab]}
              onPress={() => setTab('View Holidays')}
            >
              <Text style={[styles.tabText, tab === 'View Holidays' && styles.activeTabText]}>View Holidays</Text>
            </TouchableOpacity>
          </View>
          {tab === 'Book Holiday' && (
            <View style={styles.tabContent}>
              <HolidayBookingForm/>
            </View>
          )}
          {tab === 'View Holidays' && (
            <View style={styles.tabContent}>
              <ViewHolidays/>
            </View>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: 20,
    marginVertical: 20,
    flex: 1,
    borderRadius: 25,
    backgroundColor: '#333',
    overflow: 'hidden',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    fontSize: 16,
    paddingVertical: 15,
    flex: 1,
    textAlign: 'center',
    elevation: 1,
    opacity: 0.7,
    backgroundColor: '#222',
  },
  tabText: {
    color: '#fff',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  activeTab: {
    backgroundColor: '#333',
    opacity: 1,
  },
  tabContent: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HolidayBook;
