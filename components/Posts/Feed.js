import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import { posts } from "../../util/posts";
import IconButton from "../ui/IconButton";
import FeedSkeleton from "./FeedSkeleton";

const Feed = () => {
  const [data, setData] = useState([]);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [lastIndex, setLastIndex] = useState(0)
  useEffect(() => {
    const getInitialPosts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setData([...posts.slice(lastIndex,lastIndex+5)]);
      setLastIndex(prev=>prev+5)
      if (data.length === posts.length) setIsAtEnd(true);
      else setIsAtEnd(false);
      setInitialLoading(false);
    };
    getInitialPosts();
  }, []);

  const loadMorePosts = async event =>{
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setData([...data, ...posts.slice(lastIndex, lastIndex+5)]);
    setLastIndex(prev=>prev+5)
    if (data.length === posts.length) setIsAtEnd(true);
  }

  const handleLike = (id) => {
    setData(
      data.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDislike = (id) => {
    setData(
      data.map((post) =>
        post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post
      )
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        {item.image && (
          <Image source={{ uri: item.image }} style={styles.image} />
        )}
        <Text style={styles.content}>{item.content}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLike(item.id)}
          >
            <IconButton icon="thumbs-up" color="black" size={16} />
            <Text style={styles.buttonText}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleDislike(item.id)}
          >
            <IconButton icon="thumbs-down" color="black" size={16} />
            <Text style={styles.buttonText}>{item.dislikes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  if (initialLoading) return <FeedSkeleton count={3} />;
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.listStyles}
      onEndReached={loadMorePosts} 
      ListFooterComponent={() => ( // Conditionally render the spinner as ListFooterComponent
        !isAtEnd && <ActivityIndicator size="large" style={{ paddingVertical: 10 }} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listStyles: {
    width: "100%",
  },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "start",
    gap: 3,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
  },
  buttonText: {
    color: "#000",
    marginLeft: 0,
  },
});

export default Feed;
