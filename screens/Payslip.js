import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo

// Sample data for payslip
import payslipData from '../util/payslipData'; // Assuming you have a payslip data file

const Payslip = () => {
  const [payslip, setPayslip] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastIndex, setLastIndex] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const fetchPayslip = async () => {
      // Simulating fetching data from backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      const newPayslip = [...payslipData.slice(lastIndex, lastIndex + 7)];
      setPayslip(newPayslip);
      setLastIndex(prev => prev + 7);
      if (newPayslip.length === payslipData.length) setIsAtEnd(true);
      else setIsAtEnd(false);
      setLoading(false);
    };

    fetchPayslip();
  }, []);

  const renderPayslipItem = ({ item }) => (
    <TouchableOpacity
      style={styles.payslipItem}
      onPress={() => {
        // For now, let's open a random PDF from the internet for preview
        Linking.openURL('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf');
      }}
    >
      <Ionicons
        name={item.type === 'document' ? 'document' : 'image'} // Use Ionicons for document and image icons
        size={30}
        color="#fff"
        style={styles.icon}
      />
      <View style={styles.fileInfo}>
        <Text style={styles.fileName}>{item.name}</Text>
        <Text style={styles.fileDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  const loadMorePayslip = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    setPayslip([...payslip, ...payslipData.slice(lastIndex, lastIndex + 7)]);
    setLastIndex(prev => prev + 7);
    if (payslip.length === payslipData.length) setIsAtEnd(true);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0d1021', '#603c68']} style={styles.mainContent}>
        <View style={styles.wrapper}>
          <View style={styles.tabs}>
            <Text style={[styles.tab, styles.activeTab]}>Payslips</Text>
          </View>
          <View style={styles.tabContent}>
            {loading ? (
              <ActivityIndicator  size="large" color="#FFFFFF" />
            ) : (
            <FlatList
              data={payslip}
              renderItem={renderPayslipItem}
              style={{ width: '100%' }}
              keyExtractor={(item, index) => index.toString()}
              onEndReached={loadMorePayslip}
              ListFooterComponent={() => (
                !isAtEnd && <ActivityIndicator size="large" color="#FFFFFF" style={{ paddingVertical: 10 }} />
              )}
            />)}

          </View>
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
    color: '#fff',
  },
  activeTab: {
    backgroundColor: '#333',
    opacity: 1,
  },
  tabContent: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  payslipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  icon: {
    marginRight: 15,
  },
  fileInfo: {
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  fileDate: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default Payslip;
