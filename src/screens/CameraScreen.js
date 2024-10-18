import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../constants/color/colors';
import {hp, ph, pw} from '../../utils/responsive';
import {images} from '../../constants/images/image';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export default function CameraScreen() {
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  const device = useCameraDevice('back');

  if (hasPermission === null || !device) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const [flash, setFlash] = useState(false);
  const [photo, setPhoto] = useState(true);
  const [video, setVideo] = useState(false);

  function TogglePhoto() {
    setPhoto(true);
    setVideo(false);
  }

  function ToggleVideo() {
    setPhoto(false);
    setVideo(true);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: 'flex-start',
        paddingTop: ph(50),
      }}>
      <StatusBar backgroundColor={colors.black} barStyle={'dark-content'} />

      {/* Ensure relative positioning here */}
      <View>
        <Camera
          device={device}
          isActive={true}
          style={{
            height: hp(80),
            width: '100%',
          }}
        />

        {/* Content Overlay */}
        <View style={styles.overlayContainer}>
          <View style={styles.topRow}>
            <TouchableOpacity style={styles.colors}>
              <Image style={styles.iconSize} source={images.crosswhite} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setFlash(prev => !prev);
              }}
              style={styles.colors}>
              <Image
                style={styles.iconSize}
                source={flash ? images.light : images.lightoff}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomRow}>
            <TouchableOpacity style={styles.colors}>
              <Image style={styles.iconSize} source={images.galary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.colors}>
              <Image
                style={{height: ph(60), width: pw(60)}}
                source={video ? images.video : images.circle}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.colors}>
              <Image style={styles.iconSize} source={images.circleAround} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          top: ph(10),
        }}>
        <TouchableOpacity
          onPress={() => {
            TogglePhoto();
          }}
          style={{
            backgroundColor: photo ? '#1A1A1A' : null,
            borderRadius: pw(50),
            padding: '2%',
            marginRight: pw(5),
          }}>
          <Text style={{color: '#FFF'}}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            ToggleVideo();
          }}
          style={{
            backgroundColor: video ? '#1A1A1A' : null,
            borderRadius: pw(50),
            padding: '2%',
            marginLeft: pw(5),
          }}>
          <Text style={{color: '#FFF'}}>Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colors: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pw(100),
    padding: '2%',
  },
  iconSize: {
    height: ph(30),
    width: pw(30),
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    paddingHorizontal: pw(10),
    paddingVertical: ph(10),
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
