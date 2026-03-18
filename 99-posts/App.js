import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CardPost from './components/CardPost';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={(element) => {
          const post = element.item
          return (
            <CardPost post={post} />
          )
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 10
  },
});
