import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import _Chats from './src/screens/_Chats';
import StackNav from './src/navigation/StackNav';
import {NavigationContainer} from '@react-navigation/native';
import {SelectedItemProvider} from './Hooks/UseContext';

export default function App() {
  return (
    <SelectedItemProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      </SafeAreaView>
    </SelectedItemProvider>
  );
}

const styles = StyleSheet.create({});
