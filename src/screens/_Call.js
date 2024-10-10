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
import {images} from '../../constants/images/image';
import {colors} from '../../constants/color/colors';
import {data} from '../../constants/data/list';
import {ph, pw} from '../../utils/responsive';

export default function Call() {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <View style={{paddingTop: ph(10), paddingBottom: ph(10)}}>
        <Header headerText={'Calls'} size={25} search />
      </View>
      {/* Favorites */}
      <View style={{paddingLeft: pw(20), paddingRight: pw(20)}}>
        <Text>Favorites</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: ph(35),
            paddingLeft: pw(5),
          }}>
          <View
            style={{
              backgroundColor: colors.green,
              borderRadius: 100,
              height: ph(60),
              width: pw(60),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={images.heart}
              style={{height: ph(30), width: pw(30)}}
            />
          </View>
          <Text style={{left: pw(20), fontSize: ph(17), color: colors.black}}>
            Add favorite
          </Text>
        </View>
      </View>
      {/* History */}
      <View
        style={{
          paddingTop: ph(30),
          borderBottomWidth: 1,
          borderBottomColor: '#F3F3F3',
          paddingBottom: ph(20),
        }}>
        <View style={{paddingRight: pw(20), paddingLeft: pw(20)}}>
          <Text style={{color: colors.black, fontSize: ph(15)}}>Recent</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: ph(35),
              paddingLeft: pw(5),
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{uri: data[1].imageUri}}
                style={{height: ph(60), width: pw(60), borderRadius: 100}}
              />
              <View>
                <Text
                  style={{left: pw(20), fontSize: ph(17), color: '#8E4A5F'}}>
                  {data[1].name}
                </Text>
                <View
                  style={{
                    left: pw(20),
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingTop: ph(5),
                  }}>
                  <Image
                    source={images.leftDown}
                    style={{height: ph(15), width: pw(15)}}
                  />
                  <Text>{data[10].time}</Text>
                </View>
              </View>
            </View>

            <Image
              source={images.call}
              style={{
                height: ph(25),
                width: pw(25),
              }}
            />
          </View>
        </View>
      </View>
      <View style={{paddingTop: ph(20), alignSelf: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={images.lock} style={{height: ph(10), width: pw(10)}} />
          <Text style={{color: colors.black, fontSize: ph(10), left: pw(5)}}>
            Your personal calls are
          </Text>
          <TouchableOpacity>
            <Text style={{color: colors.green, fontSize: ph(10), left: pw(10)}}>
              end-to-end encrypted
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Overlay Images */}
      <View
        style={{
          position: 'relative',
          top: ph(380), // Adjusted for responsiveness
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: ph(35),
            right: pw(10),
            backgroundColor: colors.green,
            height: ph(50),
            width: pw(50),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 19,
            shadowColor: '#000',
            shadowOffset: {width: 5, height: 5},
            shadowOpacity: 0.2,
            shadowRadius: 6,
            elevation: 10,
          }}>
          <Image
            style={{
              height: ph(20),
              width: pw(20),
            }}
            source={images.callPlus}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
