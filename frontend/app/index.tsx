import { Text, View, StyleSheet} from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>wot stats app (dit is index.tsx)</Text>
	  <Link href="/settings" style={styles.button}> Settings screen </Link>
    </View>
  );
}

//This will be removed later XDDD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
