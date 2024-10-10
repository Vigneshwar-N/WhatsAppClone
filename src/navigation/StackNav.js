import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatList from '../components/_ChatList';
import _Chats from '../screens/_Chats';
import ChatScreen from '../screens/_ChatScreen';
import {NavigationContainer} from '@react-navigation/native';

export default function StackNav() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Chats" component={_Chats} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
