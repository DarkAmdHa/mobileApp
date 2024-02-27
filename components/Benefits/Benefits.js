import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import benefitsData from "../../util/benefits";
import BenefitsSkeleton from "./BenefitsSkeleton";
import IconButton from "../ui/IconButton";
import { LinearGradient } from "expo-linear-gradient";

const Benefits = () => {
  const [data, setData] = useState([]);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [lastIndex, setLastIndex] = useState(0);

  useEffect(() => {
    const getInitialBenefits = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setData([...benefitsData.slice(lastIndex, lastIndex + 6)]);
      setLastIndex((prev) => prev + 6);
      if (data.length === benefitsData.length) setIsAtEnd(true);
      else setIsAtEnd(false);
      setInitialLoading(false);
    };
    getInitialBenefits();
  }, []);

  const loadMoreBenefits = async (event) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setData([...data, ...benefitsData.slice(lastIndex, lastIndex + 6)]);
    setLastIndex((prev) => prev + 6);
    if (data.length === benefitsData.length) setIsAtEnd(true);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={item.title + "-" + index} style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  if (initialLoading) return <BenefitsSkeleton count={6} />;

  return (
    <LinearGradient
    colors={["#0d1021", "#603c68"]}
    style={{flex: 1}}
  >
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      style={[styles.listContainer]}
      columnWrapperStyle={[
        {
          width: "100%",
          justifyContent: "space-between",
          paddingTop: 5,
          paddingBottom: 10,
            paddingHorizontal: 15,
        },
      ]}
      onEndReached={loadMoreBenefits}
      ListHeaderComponent={() => (
        <View style={styles.filters}>
          <IconButton icon="filter" color="#fff" size={16} />
          <Text style={{color: "#fff", marginRight: 10}}>Filters</Text>
        </View>
      )}
      ListFooterComponent={() =>
        // Conditionally render the spinner as ListFooterComponent
        !isAtEnd && (
          <ActivityIndicator color="#fff" size="large" style={{ paddingVertical: 10 }} />
        )
      }
    />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  filters: {
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  listContainer: {
    flex: 1,
    width: "100%"
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
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    color: "#fff"
  },
});

export default Benefits;
