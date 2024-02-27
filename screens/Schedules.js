import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import workedHoursData from '../util/workedHours';

const Schedules = () => {
  const [tab, setTab] = useState('Worked Hours');
  const [workedHours, setWorkedHours] = useState([]);
  const [nextSchedule, setNextSchedule] = useState([]);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [loading, setLoading] = useState(true);

  const [lastIndex,setLastIndex] = useState(0);

  useEffect(() => {
    const fetchWorkedHours = async () => {
      // Simulating fetching data from backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      const newWorkedHours = [...workedHoursData.slice(lastIndex,lastIndex+7)]
      setWorkedHours(newWorkedHours);
      setLastIndex(prev=>prev+7)
      if (newWorkedHours.length === workedHoursData.length) setIsAtEnd(true);
      else setIsAtEnd(false);
      setLoading(false);
    };



    const fetchNextSchedule = async () => {
        // Simulating fetching data from backend
        await new Promise(resolve => setTimeout(resolve, 2000));
        const nextScheduleData = [
          { date: 'Monday 11/10/2024', total: '5 hours', timeSlots: ['9PM - 10PM', '2AM - 3AM'] },
          { date: 'Tuesday 11/11/2024', total: '6 hours', timeSlots: ['8PM - 10PM', '1AM - 2AM'] },
          { date: 'Wednesday 11/12/2024', total: '4 hours', timeSlots: ['10PM - 11PM', '3AM - 4AM'] },
          { date: 'Thursday 11/13/2024', total: '7 hours', timeSlots: ['7PM - 9PM', '12AM - 1AM'] },
          { date: 'Friday 11/14/2024', total: '5 hours', timeSlots: ['6PM - 7PM', '11PM - 12AM'] },
          { date: 'Saturday 11/15/2024', total: '8 hours', timeSlots: ['5PM - 8PM', '10PM - 11PM'] },
          { date: 'Sunday 11/16/2024', total: '9 hours', timeSlots: ['4PM - 6PM', '9PM - 10PM'] },
        ];
        setNextSchedule(nextScheduleData);
        setLoading(false);
      };

      fetchWorkedHours();
      fetchNextSchedule();
  }, []);

  const renderWorkedHoursItem = ({ item }) => (
<View style={styles.workedHoursItem}>
  <Text style={styles.workedHoursDate}>{item.date}</Text>
  <Text style={styles.totalHours}>{item.total}</Text>
  <View style={styles.timeSlotsContainer}>
    {item.timeSlots.map((timeSlot, index) => (
      <Text key={index} style={styles.timeSlot}>{timeSlot}</Text>
    ))}
  </View>
</View>
  );

  const renderNextScheduleItem = ({ item }) => (
    <View style={styles.workedHoursItem}>
  <Text style={styles.workedHoursDate}>{item.date}</Text>
  <Text style={styles.totalHours}>{item.total}</Text>
  <View style={styles.timeSlotsContainer}>
    {item.timeSlots.map((timeSlot, index) => (
      <Text key={index} style={styles.timeSlot}>{timeSlot}</Text>
    ))}
  </View>
</View>

  );

  const loadMoreWorkedHours = async event =>{
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setWorkedHours([...workedHours, ...workedHoursData.slice(lastIndex, lastIndex+7)]);
    setLastIndex(prev=>prev+7)
    if (workedHours.length === workedHoursData.length) setIsAtEnd(true);
  }

  const renderTabContent = () => {
    if (tab === 'Worked Hours') {
      return (
        <View style={styles.tabContent}>
          {loading ? (
            <ActivityIndicator  size="large" color="#FFFFFF" />
          ) : (
            <FlatList
              data={workedHours}
              renderItem={renderWorkedHoursItem}
              style={{width: "100%"}}
              keyExtractor={(item, index) => index.toString()}
      onEndReached={loadMoreWorkedHours} 

              ListFooterComponent={() => (
              !isAtEnd && <ActivityIndicator size="large" color="#FFFFFF" style={{ paddingVertical: 10 }} />
            )}
            />
          )}
        </View>
      );
    } else if (tab === 'Next Schedule') {
      return (
        <View style={styles.tabContent}>
          {loading ? (
            <ActivityIndicator size="large" color="#FFFFFF" />
          ) : (
            <FlatList
              data={nextSchedule}
              renderItem={renderNextScheduleItem}
              keyExtractor={(item, index) => index.toString()}
              style={{width: "100%"}}

            />
          )}
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0d1021', '#603c68']} style={styles.mainContent}>
        <View style={styles.wrapper}>
          <View style={styles.tabs}>
            <TouchableOpacity style={[styles.tab, tab === 'Worked Hours' && styles.activeTab]} onPress={() => setTab('Worked Hours')}>
                <Text style={[styles.tabText,tab === 'Worked Hours' && styles.activeTabText]}>Worked Hours</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab, tab === 'Next Schedule' && styles.activeTab]} onPress={() => setTab('Next Schedule')}>
            <Text style={[styles.tabText,tab === 'Next Schedule' && styles.activeTabText]}>Next Schedule</Text>

            </TouchableOpacity>
          </View>
          {renderTabContent()}
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
    backgroundColor:"#333",
    overflow: "hidden"
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    fontSize: 16,
    paddingVertical:15,
    flex: 1,
    textAlign: "center",
    elevation: 1,
    opacity: 0.7,
    backgroundColor: "#222",
  },
  tabText: {
    color: '#fff',
    textAlign: "center"
  },
  activeTabText: {
    color: "#fff",
    fontWeight: 'bold',
  },
  activeTab: {
    backgroundColor: '#333',
    opacity: 1
  },
  tabContent: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  workedHoursItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    width: "100%",
    position: "relative"
  },
  workedHoursDate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffd5f2',
    marginBottom: 5,
  },
  totalHours: {
    fontSize: 13,
    position:"absolute",
    top: 12,
    right: 15,
    fontWeight: 'bold',
    color: '#aaa',
  },
  timeSlotsContainer: {
    marginLeft: 20, // Add some indentation for time slots
  },
  timeSlot: {
    fontSize: 12,
    color: '#CCCCCC',
    marginBottom: 3,
  },
});

export default Schedules;
