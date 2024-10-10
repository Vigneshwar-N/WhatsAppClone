import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatList from '../components/_ChatList';
import _Chats from '../screens/_Chats';
import ChatScreen from '../screens/_ChatScreen';
import Splash from '../screens/_Splash';
import BottomTab from './BottomTab'; // Import only here

export default function StackNav() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
