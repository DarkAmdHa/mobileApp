import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import IconButton from "../ui/IconButton";
import { useNavigation } from "@react-navigation/native";
import { AuthorizedNavContext } from "../../screens/Homepage";

function FeaturedBenefits() {
  const navigation = useNavigation()
  const [benefits, setBenefits] = useState([
    {
      title: "Lifestyle Savings",
      image: "https://picsum.photos.com/450",
      icon: "play"
    },
    {
      title: "Health Cash Plan",
      image: "https://picsum.photos.com/450",
      icon: "heart"
    },
    {
      title: "Benefit 1",
      image: "https://picsum.photos.com/450",
    },
    {
      title: "Benefit 1",
      image: "https://picsum.photos.com/450",
    },
  ]);

  const {setCurrentScreen}= useContext(AuthorizedNavContext)
  const handleNavChange = (screenName)=>{
    setCurrentScreen("");
    navigation.replace(screenName)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Benefits</Text>
      

      <View style={styles.carousel}>
        <View style={styles.carouselContainer}>
          {benefits.length ? (
            benefits.map((benefit) => (
              <TouchableOpacity style={styles.card} onPress={handleNavChange.bind(this,benefit.title)}>
                <IconButton size={50} icon={benefit.icon} color="#333"/>
                <Text style={styles.cartTitle}>{benefit.title}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <p>No Benefits yet </p>
          )}
        </View>
      </View>

      {/* <TouchableOpacity style={styles.viewMoreButton}>
        <Text style={styles.viewMoreText}>View More</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    flex: 1
  },
  carousel: {
    overflow: "hidden",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff",
  },
  cartTitle: {
    fontSize: 20,
    marginBottom: 16,
    color: "#333",
    textAlign: 'center'
  },
  cardText: {
    fontSize: 16,
  },
  viewMoreButton: {
    backgroundColor: "#ffd5f2",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center"
  },
  viewMoreText: {
    fontSize: 16,
    color: "#333",
  },
  card: {
    width: "48%",
    backgroundColor: "#ffd5f2",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,


    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    color: "#000"
  },
  carouselContainer:{
    flex: 1,
    flexDirection: "row",
    gap: 12
  }
});

export default FeaturedBenefits;
