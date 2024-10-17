import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatList from '../components/_ChatList';
import _Chats from '../screens/_Chats';
import ChatScreen from '../screens/_ChatScreen';
import Splash from '../screens/_Splash';
import BottomTab from './BottomTab'; // Import only here
import Settings from '../screens/_Settings';
import LinkDevice from '../screens/LinkDevice';
import NewBroadCast from '../screens/_NewBroadCast';
import NewGroup from '../screens/_NewGroup';

export default function StackNav() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="LinkDevice" component={LinkDevice} />
        <Stack.Screen name="NewBroadCast" component={NewBroadCast} />
        <Stack.Screen name="NewGroup" component={NewGroup} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
