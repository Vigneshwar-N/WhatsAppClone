import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNav from './StackNav';
import Updates from '../screens/_Updates';
import Community from '../screens/_Community';
import Call from '../screens/_Call';
import {images} from '../../constants/images/image'; // Assuming your image imports are correct.
import {colors} from '../../constants/color/colors';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, size}) => {
            let iconSource;

            if (route.name === 'Chats') {
              iconSource = images.bMessage;
            } else if (route.name === 'Updates') {
              iconSource = images.bstatus;
            } else if (route.name === 'Community') {
              iconSource = images.bcomunity;
            } else if (route.name === 'Call') {
              iconSource = images.bcall;
            }

            return (
              <View
                style={{
                  backgroundColor: focused ? '#D8FDD2' : colors.white,
                  padding: '2%',
                  borderRadius: 50,
                  width: '60%',
                  alignItems: 'center',
                }}>
                <Image
                  source={iconSource}
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? '#18623D' : '#a9a9a9',
                  }}
                />
              </View>
            );
          },
          tabBarLabelStyle: {fontSize: 14, fontWeight: '400'}, // Label font
          tabBarInactiveTintColor: '#000000',
          tabBarActiveTintColor: '#000000',
          tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            paddingTop: 10,
            paddingHorizontal: 15,
            backgroundColor: colors.white,
            borderTopWidth: 0.5,
            borderTopColor: '#ddd',
          },
        })}>
        <Tab.Screen name="Chats" component={StackNav} />
        <Tab.Screen name="Updates" component={Updates} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Call" component={Call} />
      </Tab.Navigator>
    </View>
  );
}
