import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/color/colors';
import {data} from '../../constants/data/list';

export default function ChatList() {
  return (
    <View style={{paddingRight: 20, paddingLeft: 20, paddingTop: 20}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 5,
              paddingBottom: 5,
            }}>
            <Image
              style={{
                height: 50,
                width: 50,
                borderRadius: 100,
              }}
              source={{
                uri: item.imageUri,
              }}
            />
            <View style={{height: 50, paddingLeft: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  //   backgroundColor: '#000',
                  width: '92%',
                }}>
                {/* name */}
                <Text style={{fontSize: 18, color: colors.black}}>
                  {item.name}
                </Text>
                {/* Last seen */}
                <Text style={{fontSize: 12}}>{item.lastSeen}</Text>
              </View>
              {/* recent text */}
              <Text style={{fontSize: 13, width: 200}} numberOfLines={1}>
                {item.message}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
