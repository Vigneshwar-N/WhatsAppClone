import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/common/_Header';
import Search from '../components/common/Search';
import ChatOptions from '../components/ChatOptions';
import ChatList from '../components/_ChatList';

export default function _Chats() {
  return (
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <Header color fontSize={25} headerText={'Whatsapp'} />
      <Search AiLogo />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChatOptions />
        <ChatList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
