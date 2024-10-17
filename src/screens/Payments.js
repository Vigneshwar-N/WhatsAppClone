import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {StackActions} from '@react-navigation/native';
import {colors} from '../../constants/color/colors';
import {ph, pw} from '../../utils/responsive';
import {images} from '../../constants/images/image';
import {businessPay, pay} from '../../constants/data/paymentData';

export default function Payments() {
  return (
    <View style={{flex: 1, backgroundColor: colors.whiteBorder}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: ph(10),
          paddingHorizontal: pw(20),
          alignItems: 'center',
          borderBottomColor: colors.whiteBorder,
          borderBottomWidth: 1,
          backgroundColor: colors.white,
        }}>
        <TouchableOpacity>
          <Image
            source={images.leftArrow}
            style={{height: ph(25), width: pw(25)}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: colors.black,
            fontSize: ph(20),
            fontWeight: '700',
            left: pw(10),
          }}>
          Payments
        </Text>
      </View>
      {/* Content */}
      {/* pay */}
      <View
        style={{
          paddingHorizontal: pw(20),
          backgroundColor: colors.white,
          elevation: 1,
          shadowColor: colors.black,
          shadowOffset: {
            height: 10,
            width: 0,
          },
          shadowRadius: 10,
        }}>
        <View>
          {pay.map(pay => (
            <TouchableOpacity
              key={pay.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: ph(15),
              }}>
              <Image source={pay.icon} style={{height: 25, width: 25}} />
              <Text
                key={pay.id}
                style={{fontSize: ph(15), color: colors.black, left: pw(15)}}>
                {pay.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* business */}
      <View
        style={{
          paddingHorizontal: pw(20),
          marginVertical: ph(10),
          backgroundColor: colors.white,
          elevation: 1,
          shadowColor: colors.black,
          shadowOffset: {
            height: 10,
            width: 0,
          },
          shadowRadius: 10,
        }}>
        <Text style={{color: colors.green, fontSize: ph(14)}}>
          Chat with business
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-evenly',
          }}>
          {businessPay.slice(0, 4).map(businessPay => (
            <TouchableOpacity style={{paddingHorizontal: 10}}>
              <Image
                source={{uri: businessPay.icon}}
                style={{
                  backgroundColor: '#000',
                  height: 80,
                  width: 80,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  top: 48,
                  left: 64,
                  backgroundColor: colors.white,
                  borderRadius: 100,
                  borderWidth: 5,
                  borderColor: colors.white,
                }}>
                <Image
                  source={businessPay.icon2}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  width: 80,
                  paddingVertical: ph(10),
                  color: colors.black,
                }}>
                {businessPay.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* History */}
      <View
        style={{
          paddingHorizontal: pw(20),
          marginVertical: ph(10),
          backgroundColor: colors.white,
          elevation: 1,
          shadowColor: colors.black,
          shadowOffset: {
            height: 10,
            width: 0,
          },
          shadowRadius: 10,
        }}>
        <Text style={{alignSelf: 'center'}}>History</Text>
        <Image
          style={{alignSelf: 'center', height: 30, width: 30}}
          source={images.ledger}
        />
        <Text style={{alignSelf: 'center'}}>No payments history</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
