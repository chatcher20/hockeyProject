import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      
      <Text style={styles.instructions}> 
        To share a photo from your phone with a friend, press the button below.
        </Text>

      <TouchableOpacity onPress={() => alert('Matthew Tkachuk says hello!')} style={styles.button} >
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: '#313',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});




