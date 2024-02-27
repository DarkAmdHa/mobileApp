import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Animated, Dimensions } from 'react-native'

function FeedSkeleton({count}) {
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
                toValue: Dimensions.get('window').width,
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
    <LinearGradient
    colors={["#0d1021", "#603c68"]}
    style={{flex: 1}}
  >
    <ScrollView style={styles.skeletonContainer}>
    {[...Array(count)].map(i=>(

        <Animated.View style={[styles.card,styles.glow,
            {
              opacity: glowOpacity,
            },
            ]}>
                <Animated.View style={[styles.cardPassingLine,
                 {
                    transform: [
                        { translateX: linePosition },
                    ],
                 }
                ]}>

                </Animated.View>
            <LinearGradient

            
      colors={["rgba(255,255,255,0)", "#fff", "rgba(255,255,255,0)"]}
      start={[0, 0]} end={[1, 0]}
    ></LinearGradient>
        <View style={styles.titleSkeleton}/>
          <View style={styles.imageSkeleton} />
        <View style={styles.contentSkeleton}/>
        <View style={styles.contentSkeleton}/>
        <View style={styles.buttons}>
            <View style={styles.buttonSkeleton} />
            <View style={styles.buttonSkeleton} />
        </View>
      </Animated.View>
    ))}
    </ScrollView>
    </LinearGradient>
  )
}

export default FeedSkeleton

const styles = StyleSheet.create({
    skeletonContainer: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#333',
        overflow: 'hidden',
    },
    card: {
      backgroundColor: "transparent",
      padding: 20,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    cardPassingLine: {
        position: 'absolute',
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
      backgroundColor: "#ccc",
      marginBottom: 8,
    },
    contentSkeleton:{
      width: "100%",
      height: 10,
      backgroundColor: "#ccc",
      marginBottom: 8,
    },
    imageSkeleton: {
      width: "100%",
      height: 200,
      borderRadius: 8,
      backgroundColor: "#ccc",
      marginBottom: 8,
    },
    contenteSkeleton: {
        width: "100%",
        height: 10,
        backgroundColor: "#ccc",
        marginBottom: 8,
    },
    buttons: {
      flexDirection: "row",
      justifyContent: "start",
      gap: 3,
    },
    buttonSkeleton: {
      flexDirection: "row",
      alignItems: "center",
      gap: 0,
      width: 20,
      height: 10,
    },
    
  });