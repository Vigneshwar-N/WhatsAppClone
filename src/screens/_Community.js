import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/common/_Header';
import {colors} from '../../constants/color/colors';
import {images} from '../../constants/images/image';
import {ph, pw} from '../../utils/responsive';

export default function Community() {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header headerText={'Communities'} size={25} />
      <View
        style={{paddingTop: ph(40), paddingRight: pw(20), paddingLeft: pw(20)}}>
        <Image
          source={images.community}
          style={{
            alignSelf: 'center',
            height: ph(200),
            width: pw(200),
            borderRadius: 30,
          }}
        />
        <Text
          style={{
            paddingTop: ph(25),
            alignSelf: 'center',
            fontSize: ph(17),
            color: colors.black,
            fontWeight: '600',
          }}>
          Stay connected with a Community
        </Text>
        <Text
          style={{
            paddingTop: ph(10),
            alignSelf: 'center',
            fontSize: ph(13),
            color: colors.black,
          }}>
          Communities bring members together in topic-based groups and make it
          easy to get admin announcements. Any community you're added to will
          appear here.
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: ph(20),
          }}>
          <Text
            style={{
              fontSize: ph(15),
              color: colors.green,
            }}>
            See example communities
          </Text>
          <Image
            style={{height: ph(12), width: pw(12), top: 1, left: pw(4)}}
            source={images.rightArrow}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingHorizontal: pw(20), // 10% of the screen width
            paddingVertical: ph(3),
            backgroundColor: colors.green,
            marginTop: ph(40),
            borderRadius: 50,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            width: '90%',
          }}>
          <Text style={{color: colors.white}}>Start your community</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
