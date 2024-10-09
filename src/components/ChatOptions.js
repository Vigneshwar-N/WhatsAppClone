import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export default function ChatOptions() {
  const bg = '#F6F5F3';
  const colors = '#BBBAB8';
  const change = '#D8FDD2';
  const cText = '#528058';
  const [one, setOne] = useState(false);
  const [Two, setTwo] = useState(false);
  const [Three, setThree] = useState(false);
  const [Four, setFour] = useState(false);
  function Toggle(params) {
    switch ('All') {
      case 'All':
        return setOne(true), setTwo(false), setThree(false), setFour(false);

      case 'Unread':
        return setOne(true), setTwo(false), setThree(false), setFour(false);

      case 'Favorites':
        return setOne(true), setTwo(false), setThree(false), setFour(false);

      case 'Groups':
        return setOne(true), setTwo(false), setThree(false), setFour(false);

      default:
        one;
    }
  }
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 10,
          paddingRight: 10,
          paddingLeft: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            Toggle('All');
          }}>
          <Text
            style={{
              padding: '2%',
              borderRadius: 20,
              marginHorizontal: 5,
              backgroundColor: one ? change : bg,
              color: one ? cText : colors,
              width: 50,
              textAlign: 'center',
            }}>
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Toggle('Unread');
          }}>
          <Text
            style={{
              padding: '2%',
              borderRadius: 20,
              marginHorizontal: 5,
              backgroundColor: Two ? change : bg,
              color: Two ? cText : colors,
            }}>
            Unread
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Toggle('Favorites');
          }}>
          <Text
            style={{
              padding: '2%',
              borderRadius: 20,
              marginHorizontal: 5,
              backgroundColor: Three ? change : bg,
              color: Three ? cText : colors,
            }}>
            Favorites
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Toggle('Groups');
          }}>
          <Text
            style={{
              padding: '2%',
              borderRadius: 20,
              marginHorizontal: 5,
              backgroundColor: Four ? change : bg,
              color: Four ? cText : colors,
            }}>
            Groups
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
