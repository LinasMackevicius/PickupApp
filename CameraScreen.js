import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView, Button, StatusBar } from 'react-native';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

const CameraScreen = () => {

  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {

    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>;
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  let sharePic = () => {
    if (photo) {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    }
  };

  let savePhoto = () => {
    if (photo) {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {photo ? (
        <View>
          <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
          <Button title="Share" onPress={sharePic} />
          {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
          <Button title="Discard" onPress={() => setPhoto(undefined)} />
        </View>
      ) : (
        <Camera style={styles.container} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <Button title="Take Pic" onPress={takePic} />
          </View>
          <StatusBar style="auto" />
        </Camera>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  preview: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

export default CameraScreen;
