import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthorizedNavContext } from "../../screens/Homepage";
import { useNavigation } from "@react-navigation/native";
function Functionalities() {
  const { setCurrentScreen } = useContext(AuthorizedNavContext);
  const navigation = useNavigation();

  const handleNavChange = (screen) => {
    setCurrentScreen("");
    navigation.replace(screen);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Functionalities</Text>

      <View style={styles.functionalitiesContainer}>
        <View style={styles.row}>
          <TouchableOpacity onPress={handleNavChange.bind(this,"Schedules")} style={[styles.card, styles.twoColCard]}>
            <Ionicons name="document-text-outline" size={24} color="black" />
            <Text style={styles.cardText}>Schedules</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNavChange.bind(this,"Holiday Book")} style={[styles.card]}>
            <Ionicons name="document-text-outline" size={24} color="black" />
            <Text style={styles.cardText}>Book A Holiday</Text>
          </TouchableOpacity>

          <View style={styles.card}>
            <Ionicons name="calculator" size={24} color="black" />
            <Text style={styles.cardText}>Company Store</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Ionicons name="calculator" size={24} color="black" />
            <Text style={styles.cardText}>Company Store</Text>
          </View>
          <View style={styles.card}>
            <Ionicons name="document-text-outline" size={24} color="black" />
            <Text style={styles.cardText}>Company Store</Text>
          </View>

          <TouchableOpacity onPress={handleNavChange.bind(this,"Payslip")} style={[styles.card, styles.twoColCard]}>
            <Ionicons name="document-text-outline" size={24} color="black" />
            <Text style={styles.cardText}>Payslip</Text>
          </TouchableOpacity>

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
  functionalitiesContainer: {},
  row: {
    flexDirection: "row",
    gap: 10,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffd5f2",
    padding: 5,
    borderRadius: 10,
    marginBottom: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  twoColCard: {
    flex: 2.3,
  },
  cardText: {
    fontSize: 10,
    textAlign: "center",
  },
});

export default Functionalities;
