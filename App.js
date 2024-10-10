import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import _Chats from './src/screens/_Chats';
import Header from './src/components/common/_Header';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/navigation/StackNav';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
