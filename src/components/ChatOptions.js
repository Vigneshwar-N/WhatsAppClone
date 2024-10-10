import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ph, pw} from '../../utils/responsive';

export default function ChatOptions() {
  const bg = '#F6F5F3';
  const colors = '#BBBAB8';
  const change = '#D8FDD2';
  const cText = '#528058';

  const [one, setOne] = useState(false);
  const [Two, setTwo] = useState(false);
  const [Three, setThree] = useState(false);
  const [Four, setFour] = useState(false);

  function All() {
    setOne(true);
    setTwo(false);
    setThree(false);
    setFour(false);
  }
  function Unread() {
    setOne(false);
    setTwo(true);
    setThree(false);
    setFour(false);
  }
  function Favorites() {
    setOne(false);
    setTwo(false);
    setThree(true);
    setFour(false);
  }
  function Groups() {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(true);
  }

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: ph(10),
          paddingRight: pw(10),
          paddingLeft: pw(20),
        }}>
        <TouchableOpacity onPress={All}>
          <Text
            style={{
              paddingHorizontal: pw(5),
              paddingVertical: ph(2),
              borderRadius: pw(20),
              marginHorizontal: pw(5),
              backgroundColor: one ? change : bg,
              color: one ? cText : colors,
              width: pw(50),
              textAlign: 'center',
            }}>
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Unread}>
          <Text
            style={{
              paddingHorizontal: pw(5),
              paddingVertical: ph(2),
              borderRadius: pw(20),
              marginHorizontal: pw(5),
              backgroundColor: Two ? change : bg,
              color: Two ? cText : colors,
            }}>
            Unread
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Favorites}>
          <Text
            style={{
              paddingHorizontal: pw(5),
              paddingVertical: ph(2),
              borderRadius: pw(20),
              marginHorizontal: pw(5),
              backgroundColor: Three ? change : bg,
              color: Three ? cText : colors,
            }}>
            Favorites
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Groups}>
          <Text
            style={{
              paddingHorizontal: pw(5),
              paddingVertical: ph(2),
              borderRadius: pw(20),
              marginHorizontal: pw(5),
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
