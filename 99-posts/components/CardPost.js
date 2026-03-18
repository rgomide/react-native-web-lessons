import { Text, View, StyleSheet } from "react-native"

const CardPost = (props) => {
  const title = props.post.title
  const body = props.post.body

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 20,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 10,
    width: '100%'
  },
  title: {
    fontWeight: "bold",
    fontSize: 24
  },
  body: {
    color: '#333',
    fontSize: 16
  }
})

export default CardPost