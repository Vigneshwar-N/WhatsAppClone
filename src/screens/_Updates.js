import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/common/_Header';
import {colors} from '../../constants/color/colors';
import {data} from '../../constants/data/list';
import {channelData} from '../../constants/data/channelData';
import {images} from '../../constants/images/image';
import {ph, pw} from '../../utils/responsive';

export default function Updates() {
  const image = data[0];
  const a = data.slice(1, 10);
  const ids = a.map(item => item.id);

  console.log(ids);

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={{paddingTop: ph(10)}}>
        <Header headerText={'Updates'} size={25} search />
      </View>
      <ScrollView
        style={{flex: 1, backgroundColor: colors.white}}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingRight: pw(20), paddingLeft: pw(20)}}>
          <Text
            style={{
              color: colors.black,
              fontWeight: 'bold',
              fontSize: ph(20),
              paddingTop: ph(40),
              paddingBottom: ph(20),
            }}>
            Status
          </Text>
          {/* My Status */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: ph(30),
            }}>
            <Image
              source={{uri: image.imageUri}}
              style={{height: ph(60), width: pw(60), borderRadius: 100}}
            />
            <View
              style={{
                backgroundColor: colors.green,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                height: ph(30),
                width: ph(30),
                right: pw(25),
                bottom: ph(-18),
              }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: ph(15),
                  fontWeight: 'bold',
                }}>
                +
              </Text>
            </View>
            <View style={{right: pw(10)}}>
              <Text
                style={{
                  fontSize: ph(18),
                  fontWeight: 'bold',
                  color: colors.black,
                }}>
                My Status
              </Text>
              <Text style={{fontSize: ph(14), color: colors.gray}}>
                Tap to add status update
              </Text>
            </View>
          </View>
        </View>
        {/* Others */}
        <View
          style={{
            paddingRight: pw(20),
            paddingLeft: pw(20),
            borderBottomWidth: 1,
            borderBottomColor: colors.gray,
            paddingBottom: ph(20),
          }}>
          <Text
            style={{
              paddingBottom: ph(20),
              fontSize: ph(18),
              color: colors.gray,
            }}>
            Recent updates
          </Text>
          <FlatList
            data={a}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({item}) => (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: ph(8),
                  }}>
                  {/* Image */}
                  <View
                    style={{
                      borderWidth: 5,
                      borderColor: colors.green,
                      borderRadius: 100,
                      padding: 1,
                    }}>
                    <Image
                      source={{uri: item.imageUri}}
                      style={{
                        height: ph(60),
                        width: pw(60),
                        borderRadius: 100,
                      }}
                    />
                  </View>
                  {/* Text */}
                  <View style={{left: pw(13)}}>
                    <Text style={{fontSize: ph(20), color: colors.black}}>
                      {item.name}
                    </Text>
                    <Text style={{fontSize: ph(16), color: colors.gray}}>
                      {item.time}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        {/* Channels */}
        <View
          style={{
            paddingRight: pw(20),
            paddingLeft: pw(20),
            paddingTop: ph(20),
            paddingBottom: ph(100),
          }}>
          <Text
            style={{
              paddingTop: ph(15),
              color: colors.black,
              fontWeight: '500',
              fontSize: ph(20),
              paddingBottom: ph(10),
            }}>
            Channels
          </Text>
          <Text
            style={{
              color: colors.gray,
              fontSize: ph(14),
              paddingRight: pw(3),
              paddingLeft: pw(3),
              paddingBottom: ph(10),
            }}>
            Stay updated on topics that matter to you. Find channels to follow
            below.
          </Text>
          {/* FlatList */}
          <View>
            <FlatList
              style={{paddingTop: ph(20), paddingBottom: ph(20)}}
              horizontal
              data={channelData}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View
                  style={{
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: pw(5),
                    padding: pw(10),
                    height: ph(180),
                    width: pw(150),
                    borderColor: colors.gray,
                    borderRadius: 20,
                  }}>
                  <Image
                    style={{
                      height: ph(80),
                      width: pw(80),
                      borderRadius: 100,
                    }}
                    source={{uri: item.image}}
                  />
                  <Text style={{fontSize: ph(15), color: colors.black}}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      padding: ph(5),
                      paddingHorizontal: pw(10),
                      borderRadius: 25,
                      backgroundColor: '#D8FDD2',
                    }}>
                    <Text style={{fontSize: ph(15), color: '#14613F'}}>
                      Follow
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>

          {/* Explore Now */}
          <TouchableOpacity
            style={{
              backgroundColor: colors.green,
              paddingHorizontal: pw(20), // Adjust for responsive width
              paddingVertical: ph(4), // Adjust for responsive height
              alignSelf: 'flex-start',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              marginTop: ph(30),
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: ph(15),
                fontWeight: '600',
              }}>
              Explore more
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Overlay Images */}
      <View style={{position: 'relative'}}>
        <View
          style={{
            position: 'absolute',
            bottom: ph(100),
            right: pw(10),
            backgroundColor: '#F6F5F3',
            height: ph(50),
            width: ph(50),
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
              width: ph(20),
            }}
            resizeMode="contain"
            source={images.pencil}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: ph(35),
            right: pw(10),
            backgroundColor: colors.green,
            height: ph(50),
            width: ph(50),
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
              width: ph(20),
            }}
            source={images.whiteCam}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
