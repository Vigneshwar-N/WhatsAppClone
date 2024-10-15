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
import {colors} from '../../constants/color/colors';
import Header from '../components/common/_Header';
import {data} from '../../constants/data/list';
import {images} from '../../constants/images/image';
import {settingsData} from '../../constants/data/settings';
import {settingsAdds} from '../../constants/data/settingsAdd';

export default function Settings() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 0,
          borderBottomColor: '#EDEDED',
          borderBottomWidth: 1,
        }}>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 20,
            paddingTop: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Image
                style={{height: 30, width: 30}}
                source={images.leftArrow}
              />
            </TouchableOpacity>
            <Text
              style={{
                left: 20,
                color: colors.black,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Settings
            </Text>
          </View>
          <TouchableOpacity>
            <Image style={{height: 30, width: 30}} source={images.search} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Profile & FlatList */}
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {/* Profile */}
        <View
          style={{
            paddingTop: 15,
            paddingLeft: 20,
            paddingRight: 20,
            borderBottomColor: '#EDEDED',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{uri: data[0].imageUri}}
              style={{height: 75, width: 75, borderRadius: 100}}
            />
            <View
              style={{
                left: 35,
                justifyContent: 'space-between',
                height: 85,
              }}>
              <Text
                style={{color: colors.black, fontSize: 20, fontWeight: '700'}}>
                {data[0].name}
              </Text>
              <View>
                <Text style={{color: colors.gray, fontSize: 18}}>
                  {'+31 31233213'}
                </Text>
                <Text style={{color: colors.gray, fontSize: 17}}>
                  {'*No Status*'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Image
                  style={{height: 30, width: 30, right: 15}}
                  source={images.qrCode}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={{height: 30, width: 30}} source={images.down} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Flat List */}
        <View
          style={{
            paddingTop: 15,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={settingsData}
            contentContainerStyle={{paddingBottom: 30}}
            renderItem={({item}) => (
              <View style={{paddingTop: 30, paddingBottom: 30}}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={item.icon} style={{height: 30, width: 30}} />
                  <View
                    style={{paddingLeft: 30, justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 17, color: colors.black, top: -3}}>
                      {item.title}
                    </Text>
                    <Text style={{fontSize: 15, color: '#C3C4C6', bottom: -3}}>
                      {item.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {/* Add */}
        <View style={{paddingRight: 20, paddingLeft: 20}}>
          <Text style={{paddingBottom: 10}}>Also from Meta</Text>

          <FlatList
            scrollEnabled={false}
            style={{paddingLeft: 10}}
            data={settingsAdds}
            renderItem={({item}) => (
              <View style={{paddingTop: 20, paddingBottom: 20}}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image style={{height: 30, width: 30}} source={item.icon} />
                  <Text
                    style={{
                      fontSize: 15,
                      color: colors.black,
                      paddingLeft: 30,
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
