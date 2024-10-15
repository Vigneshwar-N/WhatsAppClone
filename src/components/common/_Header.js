import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../../constants/images/image';
import {colors} from '../../../constants/color/colors';
import {ph, pw} from '../../../utils/responsive';

export default function Header({
  headerText,
  leftImage,
  search,
  fontSize,
  color,
  size,
  noDots,
  noCamera,
  dotPress,
}) {
  return (
    <View style={{paddingTop: ph(10), paddingBottom: ph(10)}}>
      <View
        style={{
          paddingRight: pw(20),
          paddingLeft: pw(20),
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          paddingTop: ph(10),
          paddingBottom: ph(10),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {leftImage && (
            <TouchableOpacity style={{height: ph(30)}}>
              <Image
                style={{
                  height: !size ? ph(20) : ph(size),
                  width: !size ? pw(20) : pw(size),
                }}
                source={images.leftArrow}
              />
            </TouchableOpacity>
          )}
          <Text
            style={{
              left: leftImage ? pw(10) : 0,
              color: color ? colors.green : colors.black,
              fontWeight: '700',
              fontSize: fontSize ? fontSize : ph(20),
              lineHeight: ph(30),
            }}>
            {headerText}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: ph(30),
          }}>
          {!noCamera && (
            <TouchableOpacity>
              <Image
                style={{
                  height: !size ? ph(20) : ph(size),
                  width: !size ? pw(20) : pw(size),
                  right: pw(30),
                }}
                source={images.camera}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            {search && (
              <Image
                style={{
                  height: !size ? ph(20) : ph(size),
                  width: !size ? pw(20) : pw(size),
                  right: pw(10),
                }}
                source={images.search}
              />
            )}
          </TouchableOpacity>
          {!noDots && (
            <TouchableOpacity onPress={dotPress}>
              <Image
                style={{
                  height: !size ? ph(20) : ph(size),
                  width: !size ? pw(20) : pw(size),
                }}
                source={images.threeDots}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
