import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatList from '../components/_ChatList';
import _Chats from '../screens/_Chats';
import ChatScreen from '../screens/_ChatScreen';

export default function StackNav() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={_Chats} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
