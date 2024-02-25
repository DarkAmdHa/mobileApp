import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Functionalities() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Functionalities</Text>

      <View style={styles.functionalitiesContainer}>
        <View style={styles.card}>
          <Ionicons name="document-text-outline" size={24} color="black" />
          <Text style={styles.cardText}>Payslip</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="calendar-outline" size={24} color="black" />
          <Text style={styles.cardText}>My Schedule</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="calculator" size={24} color="black" />
          <Text style={styles.cardText}>Company Store</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="calculator" size={24} color="black" />
          <Text style={styles.cardText}>Company Store</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="document-text-outline" size={24} color="black" />
          <Text style={styles.cardText}>Payslip</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="calendar-outline" size={24} color="black" />
          <Text style={styles.cardText}>My Schedule</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="calculator" size={24} color="black" />
          <Text style={styles.cardText}>Company Store</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="calculator" size={24} color="black" />
          <Text style={styles.cardText}>Company Store</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  functionalitiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between'
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffd5f2",
    padding: 5,
    borderRadius: 10,
    marginBottom: 15,
    width: "22%",
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  },
  cardText: {
    fontSize: 10,
    textAlign: "center"
  },
});

export default Functionalities;
