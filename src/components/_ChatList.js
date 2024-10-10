import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {colors} from '../../constants/color/colors';
import {data} from '../../constants/data/list';
import {ph, pw} from '../../utils/responsive';
import {SelectedItemContext} from '../../Hooks/UseContext';

export default function ChatList({navigation}) {
  const {setSelectedItem} = useContext(SelectedItemContext);

  function ToChatScreen(item) {
    navigation.navigate('ChatScreen');
    setSelectedItem(item); // Correctly set the selected item
  }

  return (
    <View
      style={{paddingRight: pw(20), paddingLeft: pw(20), paddingTop: ph(20)}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              ToChatScreen(item);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: ph(5),
              paddingBottom: ph(5),
            }}>
            <Image
              style={{
                height: ph(50),
                width: pw(50),
                borderRadius: 100,
              }}
              source={item.imageUri ? {uri: item.imageUri} : null}
            />
            <View style={{height: ph(50), paddingLeft: pw(15)}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '92%',
                }}>
                <Text style={{fontSize: ph(18), color: colors.black}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: ph(12)}}>{item.lastSeen}</Text>
              </View>
              <Text style={{fontSize: ph(13), width: 200}} numberOfLines={1}>
                {item.message}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
