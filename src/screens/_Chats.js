import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';

import React, {useState} from 'react';

import Header from '../components/common/_Header';
import Search from '../components/common/Search';
import ChatOptions from '../components/ChatOptions';
import ChatList from '../components/_ChatList';
import {images} from '../../constants/images/image';
import {colors} from '../../constants/color/colors';
import {ph, pw} from '../../utils/responsive';
import {popup} from '../../constants/data/popup';

export default function _Chats({navigation}) {
  const [pop, setPop] = useState(false);
  return (
    <View
      onPress={() => {
        setPop(false);
      }}
      style={{backgroundColor: '#FFF', flex: 1, position: 'relative'}}>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <Header
        color
        fontSize={25}
        headerText={'Whatsapp'}
        size={25}
        dotPress={() => {
          setPop(true);
        }}
      />
      <ScrollView
        style={{backgroundColor: colors.white}}
        showsVerticalScrollIndicator={false}>
        <Search AiLogo />
        <ChatOptions />
        <ChatList navigation={navigation} />
      </ScrollView>
      {/* Overlay Images */}
      <View
        style={{
          position: 'relative',
        }}>
        <TouchableOpacity
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
        </TouchableOpacity>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
      {pop && (
        <View
          style={{
            position: 'absolute',
            bottom: 400,
            backgroundColor: '#FFFFFF',
            alignSelf: 'flex-end',
            borderRadius: 10,
            right: 5,
            padding: 10,
            alignItems: 'flex-start',

            elevation: 10,
            width: '50%',
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}>
          {popup.map(item => {
            const [isPressed, setIsPressed] = useState(false);

            return (
              <TouchableOpacity
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={() => {
                  if (item.title === 'Settings') {
                    navigation.navigate('Settings');
                  }
                }}
                key={item.id}
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                  backgroundColor: isPressed ? colors.gray : colors.white,
                  width: '100%',
                }}>
                <Text
                  style={{
                    color: colors.black,
                    fontSize: 16,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
