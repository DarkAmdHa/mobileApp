import { useRef, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import IconButton from "../ui/IconButton";


function BenefitsSkeleton({ count }) {
  const glowOpacity = useRef(new Animated.Value(0)).current;
  const linePosition = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    const glowAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(glowOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(glowOpacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    );

    const cardAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(linePosition, {
          toValue: Dimensions.get("window").width,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(linePosition, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    );

    Animated.parallel([glowAnimation, cardAnimation]).start();
  }, []);

  return (
    <ScrollView style={styles.skeletonContainer}>
            <View style={styles.filters}>
                <IconButton
                    icon="filter"
                    color="#2f3164"
                    size={16}
                />
                <Text>Filters</Text>
            </View>
        <View style={styles.benefitsContainer}>
        {[...Array(count)].map((i) => (
        <Animated.View
          style={[
            styles.card,
            styles.glow,
            {
              opacity: glowOpacity,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.cardPassingLine,
              {
                transform: [{ translateX: linePosition }],
              },
            ]}
          ></Animated.View>
          <View style={styles.imageSkeleton} />
          <View style={styles.titleSkeleton} />
        </Animated.View>
      ))}
        </View>
     
    </ScrollView>
  );
}

export default BenefitsSkeleton;

const styles = StyleSheet.create({
    filters: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10 
    },
  skeletonContainer: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  benefitsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:"space-between",
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 10 
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
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
    overflow: "hidden",
    position: "relative",
  },
  cardPassingLine: {
    position: "absolute",
    top: "0",
    width: 4,
    height: 400,
    backgroundColor: "#fff",
    zIndex: 9,
    left: "0",
  },
  titleSkeleton: {
    width: 40,
    height: 10,
    margin: 10,
    backgroundColor: "#ccc",
  },
  imageSkeleton: {
    backgroundColor: "#ccc",
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
