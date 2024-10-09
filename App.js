import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import _Chats from './src/screens/_Chats';
import Header from './src/components/common/_Header';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <_Chats />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
