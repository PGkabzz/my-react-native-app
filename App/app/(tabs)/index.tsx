import { Link } from "expo-router";
import { Text, View, StyleSheet  } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.context}>Hello, Mutombo</Text>
      <Text>That's me </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    gap:10,
  },
  context: {
    color: "red",
    fontSize: 30,
  },
});