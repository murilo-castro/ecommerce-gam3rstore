import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    marginTop: 400,
    marginLeft: 150,
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
});
