import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

function FeaturedBenefits() {
  const [benefits, setBenefits] = useState([
    {
      title: "Benefit 1",
      image: "https://picsum.photos.com/450",
    },
    {
      title: "Benefit 1",
      image: "https://picsum.photos.com/450",
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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Benefits</Text>

      <View style={styles.carousel}>
        <View style={styles.carouselContainer}>
          {benefits.length ? (
            benefits.map((benefit) => (
              <View style={styles.card}>
                <Image source={{ uri: benefit.image }} style={styles.image} />
                <Text style={styles.title}>{benefit.cardTitle}</Text>
              </View>
            ))
          ) : (
            <p>No Benefits yet </p>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.viewMoreButton}>
        <Text style={styles.viewMoreText}>View More</Text>
      </TouchableOpacity>
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
  card: {
    backgroundColor: "#e3e3e3",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
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
    backgroundColor: "#333",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
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
    color: "#fff"
  },
  carouselContainer:{
    flex: 1,
    flexDirection: "row",
    gap: 12
  }
});

export default FeaturedBenefits;
