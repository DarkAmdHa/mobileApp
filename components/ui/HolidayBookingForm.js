import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const HolidayBookingForm = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reason, setReason] = useState('');
  const [attachment, setAttachment] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [chosenDateType, setChosenDateType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showDatePicker = (dateType) => {
    setDatePickerVisibility(true);
    setChosenDateType(dateType);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (chosenDateType === 'from') {
      setFromDate(date);
    } else {
      setToDate(date);
    }
    hideDatePicker();
  };

  const submitForm = () => {
    if (!fromDate || !toDate || !reason) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    // Show activity spinner overlay
    setIsSubmitting(true);

    // Simulate submission process
    setTimeout(() => {
      // Hide activity spinner after 3 seconds
      setIsSubmitting(false);

      // Show toast message
      Alert.alert('Success', 'Holiday request submitted successfully.');

      // Reset form fields
      setFromDate('');
      setToDate('');
      setReason('');
      setAttachment('');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>From Date:</Text>
      <TouchableOpacity style={styles.dateInput} onPress={() => showDatePicker('from')}>
        <Text>{fromDate ? fromDate.toDateString() : 'Select Date'}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Text style={styles.label}>To Date:</Text>
      <TouchableOpacity style={styles.dateInput} onPress={() => showDatePicker('to')}>
        <Text>{toDate ? toDate.toDateString() : 'Select Date'}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <Text style={styles.label}>Reason:</Text>
      <TextInput
        style={styles.input}
        value={reason}
        onChangeText={(text) => setReason(text)}
        placeholder="Enter reason for holiday"
      />

      <Text style={styles.label}>Attachment:</Text>
      <View style={styles.attachmentContainer}>
        <TouchableOpacity style={styles.attachmentInput}>
          <Text style={styles.attachmentText}>Upload any relevant docs</Text>
          <Text>📎</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {isSubmitting && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
    width: "100%"
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000',
    backgroundColor: '#fff',
  },
  dateInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  attachmentContainer: {
    borderWidth: 2,
    borderColor: '#444',
    borderRadius: 2,
    marginBottom: 20,
    borderStyle: "dashed"
  },
  attachmentInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  attachmentText: {
    color: '#666',
  },
  submitButton: {
    backgroundColor: '#603c68',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HolidayBookingForm;
