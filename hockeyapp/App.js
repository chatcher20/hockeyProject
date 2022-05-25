import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';
import * as ImagePicker from 'expo-image-picker';

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }


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
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'red',
    padding: 18,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"       // see note below
  }
  /*
  You might expect that because we gave our image an equal width 
  and height it would be a square, but in the above video it's 
  rectangular. This is because of resizeMode, an image style property 
  that lets us control how the image is resized to fit the given 
  dimensions. Try switching it from contain to stretch or cover 
  to see other behaviors.
  */
});




