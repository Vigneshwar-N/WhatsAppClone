import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import React from 'react';

import Header from '../components/common/_Header';
import Search from '../components/common/Search';
import ChatOptions from '../components/ChatOptions';
import ChatList from '../components/_ChatList';
import {images} from '../../constants/images/image';
import {colors} from '../../constants/color/colors';
import {ph, pw} from '../../utils/responsive';

export default function _Chats() {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <Header color fontSize={25} headerText={'Whatsapp'} size={25} />
      <Search AiLogo />
      <ScrollView
        style={{backgroundColor: colors.white}}
        showsVerticalScrollIndicator={false}>
        <ChatOptions />
        <ChatList />
      </ScrollView>
      {/* Overlay Images */}
      <View
        style={{
          position: 'relative',
        }}>
        <View
          style={{
            position: 'absolute',
            bottom: ph(100),
            right: pw(12),
            backgroundColor: '#F6F5F3',
            height: ph(45),
            width: pw(45),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: pw(15),

            shadowColor: '#000',
            shadowOffset: {width: pw(5), height: ph(5)},
            shadowOpacity: 0.2,
            shadowRadius: 6,
            elevation: 10,
          }}>
          <Image
            style={{
              height: ph(30),
              width: pw(30),
            }}
            resizeMode="contain"
            source={images.MetaAilogo}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: ph(35),
            right: pw(10),
            backgroundColor: colors.green,
            height: ph(50),
            width: pw(50),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: pw(19),

            shadowColor: '#000',
            shadowOffset: {width: pw(5), height: ph(5)},
            shadowOpacity: 0.2,
            shadowRadius: 6,
            elevation: 10,
          }}>
          <Image
            style={{
              height: ph(20),
              width: pw(20),
            }}
            source={images.whiteCam}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
