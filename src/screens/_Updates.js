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
import {wp} from '../../utils/responsive';
import {channelData} from '../../constants/data/channelData';
import {images} from '../../constants/images/image';

export default function Updates() {
  const image = data[0];
  const a = data.slice(1, 10);
  const ids = a.map(item => item.id); // Extract the 'id' from each element

  console.log(ids);

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />

      <View style={{paddingTop: 10}}>
        <Header headerText={'Updates'} size={25} search />
      </View>
      <ScrollView style={{flex: 1, backgroundColor: colors.white}}>
        <View style={{paddingRight: 20, paddingLeft: 20}}>
          <Text
            style={{
              color: colors.black,
              fontWeight: 'bold',
              fontSize: 20,
              paddingTop: 40,
              paddingBottom: 20,
            }}>
            Status
          </Text>
          {/* My Status */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 30,
            }}>
            <Image
              source={{uri: image.imageUri}}
              style={{height: 60, width: 60, borderRadius: 100}}
            />
            <View
              style={{
                backgroundColor: colors.green,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                height: 30,
                width: 30,
                right: 25,
                bottom: -18,
              }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                +
              </Text>
            </View>
            <View style={{right: 10}}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: colors.black}}>
                My Status
              </Text>
              <Text style={{fontSize: 14, color: colors.gray}}>
                Tap to add status update
              </Text>
            </View>
          </View>
        </View>
        {/* others */}
        <View
          style={{
            paddingRight: 20,
            paddingLeft: 20,
            borderBottomWidth: 1,
            borderBottomColor: colors.gray,
            paddingBottom: 20,
          }}>
          <Text style={{paddingBottom: 20, fontSize: 18, color: colors.gray}}>
            Recent updates
          </Text>
          <View style={{}}>
            <FlatList
              data={a}
              scrollEnabled={false}
              renderItem={({item}) => (
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 8,
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
                          height: 60,
                          width: 60,
                          borderRadius: 100,
                        }}
                      />
                    </View>
                    {/* Text */}
                    <View style={{left: 13}}>
                      <Text style={{fontSize: 20, color: colors.black}}>
                        {item.name}
                      </Text>
                      <Text style={{fontSize: 16, color: colors.gray}}>
                        {item.time}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        {/* Channels */}
        <View
          style={{
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 20,
            paddingBottom: 100,
          }}>
          <Text
            style={{
              paddingTop: 15,
              color: colors.black,
              fontWeight: '500',
              fontSize: 20,
              paddingBottom: 10,
            }}>
            Channels
          </Text>
          <Text
            style={{
              color: colors.gray,
              fontSize: 14,
              paddingRight: 3,
              paddingLeft: 3,
              paddingBottom: 10,
            }}>
            Stay updated on topics that matter to you. Find channels to follow
            below.
          </Text>
          {/* FlatList */}
          <View>
            <FlatList
              style={{paddingTop: 20, paddingBottom: 20}}
              horizontal
              data={channelData}
              renderItem={({item}) => (
                <View
                  style={{
                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 5,
                    padding: 10,
                    height: 180,
                    width: 150,
                    borderColor: colors.gray,
                    borderRadius: 20,
                  }}>
                  <Image
                    style={{
                      height: 80,
                      width: 80,
                      borderRadius: 100,
                    }}
                    source={{uri: item.image}}
                  />
                  <Text style={{fontSize: 15, color: colors.black}}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      padding: 5,
                      paddingHorizontal: 10,
                      borderRadius: 25,
                      backgroundColor: '#D8FDD2',
                    }}>
                    <Text style={{fontSize: 15, color: '#14613F'}}>Follow</Text>
                  </View>
                </View>
              )}
            />
          </View>

          {/* Explore Now */}
          <TouchableOpacity
            style={{
              backgroundColor: colors.green,
              paddingHorizontal: '5%',
              paddingVertical: '4%',
              alignSelf: 'flex-start',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              marginTop: 30,
            }}>
            <Text
              style={{color: colors.white, fontSize: 15, fontWeight: '600'}}>
              Explore more
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Overlay Images */}
      <View
        style={{
          position: 'relative',
        }}>
        <View
          style={{
            position: 'absolute',
            bottom: 100,
            right: 10,
            backgroundColor: '#F6F5F3',
            // borderWidth: 10,
            height: 50,
            width: 50,

            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 19,
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            resizeMode="contain"
            source={images.pencil}
          />
        </View>
        <View
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
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={images.whiteCam}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
