import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {images} from '../../../constants/images/image';
import {ph, pw} from '../../../utils/responsive';

export default function Search({meta, leftArrow, AiLogo}) {
  return (
    <View
      style={{
        paddingRight: pw(20),
        paddingLeft: pw(20),
        paddingTop: ph(10),
        paddingBottom: ph(10),
      }}>
      <View
        style={{
          borderRadius: pw(50),
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F6F5f0',
          paddingRight: pw(20),
          paddingLeft: pw(20),
        }}>
        {leftArrow && (
          <Image
            style={{
              height: ph(30),
              width: pw(30),
            }}
            source={images.leftArrow}
          />
        )}
        {AiLogo && (
          <Image
            source={images.MetaAilogo}
            style={{
              height: ph(30),
              width: pw(30),
              borderRadius: 100,
            }}
          />
        )}
        <TextInput
          maxLength={100}
          placeholder={meta ? 'Ask Meta AI or Search' : 'Search...'}
          placeholderTextColor={'#aaa'}
          style={{fontSize: ph(15), width: '90%'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
