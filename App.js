import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import _Chats from './src/screens/_Chats';
import Header from './src/components/common/_Header';
import StackNav from './src/navigation/StackNav';
import {NavigationContainer} from '@react-navigation/native';
import {ChatContext} from './Hooks/UseContext';

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
