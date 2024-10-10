import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/color/colors';
import {images} from '../../constants/images/image';

export default function Splash() {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View
        style={{flex: 0.5, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Image source={images.whatsappLogo} style={{height: 110, width: 110}} />
      </View>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'flex-end',
          alignItems: 'center',
          bottom: 100,
        }}>
        <Text style={{color: '#848C97', fontSize: 15}}>from </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            right: 10,
            top: 5,
          }}>
          <Image source={images.metaLogo} style={{height: 25, width: 25}} />
          <Text
            style={{
              color: '#24D465',
              fontSize: 20,
              fontWeight: '800',
              left: 5,
            }}>
            Meta
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
