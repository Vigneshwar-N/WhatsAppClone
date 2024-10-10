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

export default function Call() {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <View style={{paddingTop: 10, paddingBottom: 10}}>
        <Header headerText={'Calls'} size={25} search />
      </View>
      {/* Favorites */}
      <View style={{paddingLeft: 20, paddingRight: 20}}>
        <Text>Favorites</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 35,
            paddingLeft: 5,
          }}>
          <View
            style={{
              backgroundColor: colors.green,
              borderRadius: 100,
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={images.heart} style={{height: 30, width: 30}} />
          </View>
          <Text style={{left: 20, fontSize: 17, color: colors.black}}>
            Add favorite
          </Text>
        </View>
      </View>
      {/* History */}
      <View
        style={{
          paddingTop: 30,
          borderBottomWidth: 1,
          borderBottomColor: '#F3F3F3',
          paddingBottom: 20,
        }}>
        <View style={{paddingRight: 20, paddingLeft: 20}}>
          <Text style={{color: colors.black, fontSize: 15}}>Recent</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 35,
              paddingLeft: 5,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{uri: data[1].imageUri}}
                style={{height: 60, width: 60, borderRadius: 100}}
              />
              <View>
                <Text style={{left: 20, fontSize: 17, color: '#8E4A5F'}}>
                  {data[1].name}
                </Text>
                <View
                  style={{
                    left: 20,
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingTop: 5,
                  }}>
                  <Image
                    source={images.leftDown}
                    style={{height: 15, width: 15}}
                  />
                  <Text>{data[10].time}</Text>
                </View>
              </View>
            </View>

            <Image
              source={images.call}
              style={{
                height: 25,
                width: 25,
              }}
            />
          </View>
        </View>
      </View>
      <View style={{paddingTop: 20, alignSelf: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={images.lock} style={{height: 10, width: 10}} />
          <Text style={{color: colors.black, fontSize: 10, left: 5}}>
            Your personal calls are
          </Text>
          <TouchableOpacity>
            <Text style={{color: colors.green, fontSize: 10, left: 10}}>
              end-to-end encrypted
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Overlay Images */}
      <View
        style={{
          position: 'relative',
          top: 450,
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 35,
            right: 10,
            backgroundColor: colors.green,
            height: 50,
            width: 50,
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
              height: 20,
              width: 20,
            }}
            source={images.callPlus}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
