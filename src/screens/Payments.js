import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {StackActions} from '@react-navigation/native';
import {colors} from '../../constants/color/colors';
import {ph, pw} from '../../utils/responsive';
import {images} from '../../constants/images/image';
import {businessPay, pay} from '../../constants/data/paymentData';

export default function Payments({navigation}) {
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
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
      <ScrollView>
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
            marginVertical: ph(5),
          }}>
          <Text
            style={{
              fontSize: ph(14),
              color: colors.green,
              paddingVertical: ph(20),
            }}>
            Payments methods
          </Text>
          <View
            style={{
              backgroundColor: '#B6F9B4',
              flexDirection: 'row',
              alignItems: 'center',
              padding: ph(20),
              borderRadius: pw(20),
            }}>
            <View>
              <Image
                style={{height: 30, width: 30, right: pw(5)}}
                source={images.Protection}
              />
            </View>
            <View style={{left: pw(5)}}>
              <Text style={{fontSize: ph(12), color: colors.black}}>
                To protect your security , Whatsapp does not store your
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: ph(12), color: colors.black}}>
                  UPI PIN or full bank account number.
                </Text>
                <Text
                  style={{
                    fontSize: ph(14),
                    color: colors.green,
                    fontWeight: '600',
                  }}>{` Learn More`}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: ph(20),
            }}>
            <Image
              source={images.add}
              style={{height: ph(25), width: pw(25)}}
            />
            <Text
              style={{
                paddingLeft: pw(10),
                fontSize: ph(13),
                color: colors.black,
              }}>
              Add payment method
            </Text>
          </TouchableOpacity>
        </View>
        {/* Help */}
        <View
          style={{
            paddingHorizontal: pw(10),
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
            marginVertical: ph(5),
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: ph(15),
            }}>
            <Image
              source={images.add}
              style={{height: ph(25), width: pw(25)}}
            />
            <Text
              style={{
                paddingLeft: pw(10),
                fontSize: ph(13),
                color: colors.black,
              }}>
              Help
            </Text>
          </TouchableOpacity>
        </View>
        {/* Remove  */}
        <View
          style={{
            paddingHorizontal: pw(10),
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
            marginVertical: ph(5),
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: ph(15),
            }}>
            <Image
              source={images.trash}
              style={{height: ph(25), width: pw(25)}}
            />
            <Text
              style={{
                paddingLeft: pw(10),
                fontSize: ph(13),
                color: colors.whiteBorder,
              }}>
              Remove payment information
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingVertical: ph(10)}}>
          <Image
            source={images.upi}
            style={{
              alignSelf: 'center',
              height: ph(50),
              width: pw(50),
              paddingBottom: ph(40),
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
