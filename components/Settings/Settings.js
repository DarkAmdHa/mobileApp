import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Settings() {
  const settingsGroups = [
    {
      header: 'General',
      options: [
        { title: 'Your Account', icon: 'account-circle' },
        { title: 'Change Password', icon: 'lock' },
        { title: 'Notifications', icon: 'notifications' },
      ],
    },
    {
      header: 'Privacy',
      options: [
        { title: 'Privacy Settings', icon: 'privacy-tip' },
        { title: 'Terms and Conditions', icon: 'description' },
        { title: 'About Us', icon: 'info' },
      ],
    },
  ];

  const handleSettingsOptionPress = (option) => {
    // Handle press for each settings option
    console.log('Pressed:', option.title);
  };

  return (
    <ScrollView style={styles.container}>
      {settingsGroups.map((group, index) => (
        <React.Fragment key={index}>
          <Text style={styles.groupHeader}>{group.header}</Text>
          {group.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionContainer}
              onPress={() => handleSettingsOptionPress(option)}
            >
              <Icon name={option.icon} size={24} color="#333" style={styles.icon} />
              <Text style={styles.optionText}>{option.title}</Text>
            </TouchableOpacity>
          ))}
        </React.Fragment>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    paddingHorizontal: 15,
    width: "100%"
  },
  groupHeader: {
    fontSize: 20,
    paddingTop: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 18,
  },
});

export default Settings;
