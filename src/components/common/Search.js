import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {images} from '../../../constants/images/image';

export default function Search({meta, leftArrow, AiLogo}) {
  return (
    <View
      style={{
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
      }}>
      <View
        style={{
          paddingRight: 20,
          paddingLeft: 20,
          borderRadius: 50,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F6F5f0',
        }}>
        {leftArrow && (
          <Image
            style={{
              height: 30,
              width: 30,
            }}
            source={images.leftArrow}
          />
        )}
        {AiLogo && (
          <Image
            source={images.MetaAilogo}
            style={{
              height: 30,
              width: 30,
              // borderWidth: 10,
              // borderColor: '#000',
              borderRadius: 100,
            }}
          />
        )}
        <TextInput
          maxLength={100}
          placeholder={meta ? 'Ask Meta AI or Search' : 'Search...'}
          placeholderTextColor={'#aaa'}
          style={{fontSize: 15}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
