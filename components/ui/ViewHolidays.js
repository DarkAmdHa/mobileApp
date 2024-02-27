import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import holidaysData from '../../util/holidays';

const ViewHolidays = () => {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastIndex, setLastIndex] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [showReason, setShowReason] = useState({});

  useEffect(() => {
    const fetchHolidays = async () => {
      // Simulating fetching data from backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      const newHolidays = [...holidaysData.slice(lastIndex, lastIndex + 7)];
      setHolidays(newHolidays);
      setLastIndex(prev => prev + 7);
      if (newHolidays.length === holidaysData.length) setIsAtEnd(true);
      else setIsAtEnd(false);
      setLoading(false);
    };

    fetchHolidays();
  }, []);

  const loadMoreHolidays = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
    setHolidays([...holidays, ...holidaysData.slice(lastIndex, lastIndex + 7)]);
    setLastIndex(prev => prev + 7);
    if (holidays.length === holidaysData.length) setIsAtEnd(true);

  };

  const renderHolidayItem = ({ item }) => (
    <TouchableOpacity
      style={styles.holidayItem}
      onPress={() => setShowReason({ ...showReason, [item.date]: !showReason[item.date] })}
    >
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
        }}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={[styles.status, { color: getStatusColor(item.status) }]}>{item.status}</Text>

        </View>
      {showReason[item.date] && (
        <View style={styles.reasonContainer}>
          <Text style={styles.reason}>{item.reason}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return '#555';
      case 'Rejected':
        return 'red';
      case 'Accepted':
        return 'green';
      default:
        return '#555';
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>

          <View style={styles.tabContent}>
            {loading ? (
              <ActivityIndicator size="large" color="#FFFFFF" />
            ) : (
              <FlatList
                data={holidays}
                renderItem={renderHolidayItem}
                style={{ width: '100%' }}
                keyExtractor={(item, index) => index.toString()}
              onEndReached={loadMoreHolidays}

                ListFooterComponent={() => (
                  !isAtEnd && <ActivityIndicator size="large" color="#FFFFFF" style={{ paddingVertical: 10 }} />
                )}
              />
            )}
          </View>
        </View>
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  holidayItem: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    width: '100%',
  },
  date: {
    flex: 1,
    color: '#fff',
  },
  status: {
    width: 100,
    textAlign: 'right',
    marginRight: 20,
  },
  reasonContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  reason: {
    color: '#fff',
  },
});

export default ViewHolidays;