import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Header from '../components/common/_Header';
import Search from '../components/common/Search';
import ChatOptions from '../components/ChatOptions';
import ChatList from '../components/_ChatList';
import {images} from '../../constants/images/image';
import {colors} from '../../constants/color/colors';
import {ph, pw} from '../../utils/responsive';
import {popup} from '../../constants/data/popup';

export default function _Chats({navigation}) {
  const [pop, setPop] = useState(false);
  const [pressedStates, setPressedStates] = useState(
    new Array(popup.length).fill(false),
  );

  const handlePressIn = index => {
    const newPressedStates = [...pressedStates];
    newPressedStates[index] = true;
    setPressedStates(newPressedStates);
  };

  const handlePressOut = index => {
    const newPressedStates = [...pressedStates];
    newPressedStates[index] = false;
    setPressedStates(newPressedStates);
  };

  return (
    <Pressable
      onPress={() => {
        setPop(false);
      }}
      style={{backgroundColor: '#FFF', flex: 1, position: 'relative'}}>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <Header
        color
        fontSize={25}
        headerText={'Whatsapp'}
        size={25}
        dotPress={() => {
          setPop(prev => !prev);
        }}
      />
      <ScrollView
        style={{backgroundColor: colors.white}}
        showsVerticalScrollIndicator={false}>
        <Search AiLogo />
        <ChatOptions />
        <ChatList navigation={navigation} />
      </ScrollView>

      {/* Overlay Images */}
      <View style={styles.overlayContainer}>
        <TouchableOpacity style={styles.metaLogo}>
          <Image
            style={styles.metaLogoImage}
            resizeMode="contain"
            source={images.MetaAilogo}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cameraIcon}>
          <Image style={styles.cameraImage} source={images.addChat} />
        </TouchableOpacity>
      </View>

      {/* Popup menu */}
      {pop && (
        <View style={styles.popupContainer}>
          {popup.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPressIn={() => handlePressIn(index)}
              onPressOut={() => handlePressOut(index)}
              onPress={() => {
                if (item.id === '6') {
                  navigation.navigate('Settings');
                }
                if (item.id === '1') {
                  navigation.navigate('NewGroup');
                }
                if (item.id === '2') {
                  navigation.navigate('NewBroadCast');
                }
                if (item.id === '3') {
                  navigation.navigate('LinkDevice');
                }
                setPop(false);
              }}
              style={[
                styles.popupItem,
                {
                  backgroundColor: pressedStates[index]
                    ? colors.gray
                    : colors.white,
                },
              ]}>
              <Text style={styles.popupText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    position: 'relative',
  },
  metaLogo: {
    position: 'absolute',
    bottom: ph(100),
    right: pw(12),
    backgroundColor: '#F6F5F3',
    height: ph(45),
    width: pw(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pw(15),
    shadowColor: '#000',
    shadowOffset: {width: pw(5), height: ph(5)},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  metaLogoImage: {
    height: ph(30),
    width: pw(30),
  },
  cameraIcon: {
    position: 'absolute',
    bottom: ph(35),
    right: pw(10),
    backgroundColor: colors.green,
    height: ph(50),
    width: pw(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pw(19),
    shadowColor: '#000',
    shadowOffset: {width: pw(5), height: ph(5)},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  cameraImage: {
    height: ph(20),
    width: pw(20),
  },
  popupContainer: {
    position: 'absolute',
    bottom: 400,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    borderRadius: 10,
    right: 5,
    padding: 10,
    alignItems: 'flex-start',
    elevation: 10,
    width: '50%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  popupItem: {
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
  },
  popupText: {
    color: colors.black,
    fontSize: 16,
  },
});
