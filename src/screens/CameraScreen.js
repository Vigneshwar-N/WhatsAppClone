import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constants/color/colors';
import {hp, ph, pw} from '../../utils/responsive';
import {images} from '../../constants/images/image';

export default function CameraScreen() {
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
      <View
        style={{
          height: hp(80),
          justifyContent: 'space-between',
          backgroundColor: '#ACA',
          paddingVertical: ph(1),
          paddingHorizontal: pw(10),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.colors}>
            <Image
              style={{height: ph(30), width: pw(30)}}
              source={images.crosswhite}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setFlash(prev => !prev);
            }}
            style={styles.colors}>
            <Image
              style={{height: ph(30), width: pw(30)}}
              source={flash ? images.light : images.lightoff}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.colors}>
            <Image
              style={{height: ph(30), width: pw(30)}}
              source={images.galary}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.colors}>
            <Image
              style={{height: ph(60), width: pw(60)}}
              source={video ? images.video : images.circle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.colors}>
            <Image
              style={{height: ph(30), width: pw(30)}}
              source={images.circleAround}
            />
          </TouchableOpacity>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Corrected to rgba for transparency
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pw(100),
    padding: '2%',
  },
});
