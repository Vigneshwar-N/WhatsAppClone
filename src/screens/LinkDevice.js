import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ph, pw, wp} from '../../utils/responsive';
import {data} from '../../constants/data/list';
import {images} from '../../constants/images/image';
import {colors} from '../../constants/color/colors';
import {projectRoot} from '../../metro.config';

export default function LinkDevice({navigation}) {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: ph(10),
          paddingHorizontal: pw(20),
          alignItems: 'center',
          borderBottomColor: colors.whiteBorder,
          borderBottomWidth: pw(1),
          backgroundColor: colors.white,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            style={{height: ph(25), width: pw(25)}}
            source={images.leftArrow}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: ph(20),
            color: colors.black,
            fontWeight: '700',
            paddingLeft: pw(20),
          }}>
          Linked Device
        </Text>
      </View>
      {/* Content */}
      <View style={{backgroundColor: colors.white}}>
        <Image
          style={{alignSelf: 'center', marginVertical: ph(30)}}
          source={images.linkedDevice}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: ph(12), color: colors.black}}>
            Use Whatsapp in web, Desktop, and other devices.
          </Text>
          <View style={{width: wp(1)}} />
          <Text style={{fontSize: ph(12), color: '#6186A1'}}>Learn More</Text>
        </View>

        <View style={{paddingVertical: ph(20)}}>
          <TouchableOpacity>
            <Text
              style={{
                color: colors.white,
                fontWeight: '600',
                paddingVertical: '2%',
                width: '70%',
                backgroundColor: colors.green,
                alignSelf: 'center',
                borderRadius: pw(50),
                textAlign: 'center',
              }}>
              Link a device
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Bottom */}
      <View style={{flex: 1, backgroundColor: '#F7F8FA', paddingTop: ph(50)}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Image
            source={images.lockS}
            style={{height: 10, width: 10, right: pw(3)}}
          />
          <Text style={{fontSize: ph(12), color: colors.black}}>
            Your personal messages are
          </Text>
          <Text
            style={{
              fontSize: ph(12),
              color: colors.green,
              marginHorizontal: pw(2),
            }}>
            end-to-end encrypted
          </Text>
          <Text style={{fontSize: ph(12), color: colors.black}}>
            on all your
          </Text>
        </View>
        <Text
          style={{fontSize: ph(12), color: colors.black, alignSelf: 'center'}}>
          devices.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
