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
        <Text
          style={{
            color: colors.green,
            fontSize: ph(14),
            paddingTop: ph(20),
          }}>
          Chat with business
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-evenly',
            paddingHorizontal: pw(20),
            paddingVertical: ph(20),
          }}>
          {businessPay.slice(0, 4).map(businessPay => (
            <TouchableOpacity style={{paddingHorizontal: 10}}>
              <Image
                source={{uri: businessPay.icon}}
                style={{
                  backgroundColor: '#000',
                  height: ph(80),
                  width: pw(80),
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  top: ph(50),
                  left: pw(64),
                  backgroundColor: colors.white,
                  borderRadius: 100,
                  borderWidth: pw(5),
                  borderColor: colors.white,
                }}>
                <Image
                  source={businessPay.icon2}
                  style={{
                    height: ph(20),
                    width: pw(20),
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  width: pw(80),
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
          backgroundColor: colors.white,
          elevation: 1,
          shadowColor: colors.black,
          shadowOffset: {
            height: ph(10),
            width: 0,
          },
          shadowRadius: 10,
          paddingHorizontal: pw(20),
          backgroundColor: colors.white,
          marginVertical: ph(10),
        }}>
        <Text
          style={{color: colors.green, paddingTop: ph(20), fontSize: ph(14)}}>
          History
        </Text>
        <Image
          style={{
            alignSelf: 'center',
            height: ph(60),
            width: pw(60),
            marginTop: ph(20),
          }}
          source={images.ledger}
        />
        <Text
          style={{
            alignSelf: 'center',
            paddingVertical: ph(10),
            color: colors.gray,
            fontSize: ph(14),
          }}>
          No payments history
        </Text>
      </View>
      {/* Payments Methods */}
      <View
        style={{
          paddingHorizontal: pw(20),
          backgroundColor: colors.white,
          elevation: 1,
          shadowColor: colors.black,
          shadowOffset: {
            height: ph(10),
            width: 0,
          },
          shadowRadius: 10,
          paddingHorizontal: pw(20),
          backgroundColor: colors.white,
          marginVertical: ph(10),
        }}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
