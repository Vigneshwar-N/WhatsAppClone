import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/color/colors';
import {images} from '../../constants/images/image';
import {ph, pw} from '../../utils/responsive';

export default function Splash() {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View
        style={{flex: 0.5, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Image
          source={images.whatsappLogo}
          style={{height: ph(110), width: pw(110)}}
        />
      </View>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'flex-end',
          alignItems: 'center',
          bottom: ph(100), // Adjusted for responsiveness
        }}>
        <Text style={{color: '#848C97', fontSize: ph(15)}}>from </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            right: pw(10), // Adjusted for responsiveness
            top: ph(5), // Adjusted for responsiveness
          }}>
          <Image
            source={images.metaLogo}
            style={{height: ph(25), width: pw(25)}}
          />
          <Text
            style={{
              color: '#24D465',
              fontSize: ph(20),
              fontWeight: '800',
              left: pw(5), // Adjusted for responsiveness
            }}>
            Meta
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
