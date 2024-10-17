import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {ph, pw} from '../../utils/responsive';
import {images} from '../../constants/images/image';
import {colors} from '../../constants/color/colors';
import {data} from '../../constants/data/list';

export default function NewGroup({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: pw(10),
          justifyContent: 'space-between',
          paddingVertical: ph(20),
          borderBottomColor: '#EEEEEE',
          borderBottomWidth: pw(1),
        }}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image
              style={{height: ph(25), width: pw(25)}}
              source={images.leftArrow}
            />
          </TouchableOpacity>
          <View style={{paddingLeft: pw(15)}}>
            <Text
              style={{
                fontSize: ph(15),
                color: colors.black,
                fontWeight: '500',
              }}>
              New Group
            </Text>
            <Text style={{fontSize: ph(12), color: colors.black}}>
              Add members
            </Text>
          </View>
        </View>
        <Image style={{height: ph(25), width: pw(25)}} source={images.search} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Frequently  contacted */}
        <Text
          style={{
            paddingHorizontal: pw(20),
            color: colors.grayText,
            fontSize: ph(13),
            paddingVertical: ph(20),
          }}>
          Frequently Contacted
        </Text>
        <View>
          {data.slice(1, 5).map(data => (
            <View
              key={data.id}
              style={{paddingVertical: ph(20), paddingHorizontal: pw(20)}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={{uri: data.imageUri}}
                  style={{height: ph(65), width: pw(65), borderRadius: pw(100)}}
                />
                <View
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: 20,
                  }}>
                  <Text style={{fontSize: ph(17), color: colors.black}}>
                    {data.name}
                  </Text>
                  <Text style={{fontSize: ph(15), color: colors.grayText}}>
                    {data.description}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        {/* Contacts on whatsapp */}
        <Text
          style={{
            paddingHorizontal: pw(20),
            color: colors.grayText,
            fontSize: ph(13),
            paddingVertical: ph(10),
          }}>
          Contacts on Whatsapp
        </Text>
        <View style={{paddingBottom: ph(20)}}>
          {data.slice(6, 16).map(data => (
            <View
              key={data.id}
              style={{paddingVertical: ph(20), paddingHorizontal: pw(20)}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={{uri: data.imageUri}}
                  style={{height: ph(65), width: pw(65), borderRadius: pw(100)}}
                />
                <View
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: 20,
                  }}>
                  <Text style={{fontSize: ph(17), color: colors.black}}>
                    {data.name}
                  </Text>
                  <Text style={{fontSize: ph(15), color: colors.grayText}}>
                    {data.description}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      {/* Overlay Images */}
      <TouchableOpacity style={styles.overlayContainer}>
        <TouchableOpacity style={styles.cameraIcon}>
          <Image style={styles.cameraImage} source={images.rightArrowWhite} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    position: 'relative',
  },

  cameraIcon: {
    position: 'absolute',
    bottom: ph(35),
    right: pw(10),
    backgroundColor: colors.green,
    height: ph(60),
    width: pw(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pw(19),
    shadowColor: '#000',
    shadowOffset: {width: pw(5), height: ph(5)},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  cameraImage: {
    height: ph(30),
    width: pw(30),
  },
});
