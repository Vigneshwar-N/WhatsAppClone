import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/common/_Header';
import {colors} from '../../constants/color/colors';
import {images} from '../../constants/images/image';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Community() {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Header headerText={'Communities'} size={25} />
      <View style={{paddingTop: 40, paddingRight: 20, paddingLeft: 20}}>
        <Image
          source={images.community}
          style={{
            alignSelf: 'center',
            height: 200,
            width: 200,
            borderRadius: 30,
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            alignSelf: 'center',
            fontSize: 17,
            color: colors.black,
            fontWeight: '600',
          }}>
          Stay connect with a Community
        </Text>
        <Text
          style={{
            paddingTop: 10,
            alignSelf: 'center',
            fontSize: 13,
            color: colors.black,
          }}>
          Community bring members together in topic-based group, and make easy
          to get admin announcements. Any community you're added to will appear
          here.
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: colors.green,
            }}>
            See example communities
          </Text>
          <Image
            style={{height: 12, width: 12, top: 1, left: 4}}
            source={images.rightArrow}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingHorizontal: '10%',
            paddingVertical: '3%',
            backgroundColor: colors.green,
            marginTop: 40,
            borderRadius: 50,
            // alignSelf: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            width: '90%',
          }}>
          <Text style={{color: colors.white}}>Start your community</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
