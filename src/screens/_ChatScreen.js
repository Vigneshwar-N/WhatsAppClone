import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {data} from '../../constants/data/list';
import {colors} from '../../constants/color/colors';
import {images} from '../../constants/images/image';
import {ph, pw} from '../../utils/responsive';
import {ChatContext} from '../../Hooks/UseContext';

export default function ChatScreen() {
  const {selectedChat} = useContext(ChatContext);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const image = data[0];

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <ImageBackground source={images.wallpaper} style={{flex: 1}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View
        style={{
          paddingRight: pw(10),
          paddingLeft: pw(10),
          paddingTop: ph(10),
          paddingBottom: ph(5),
          backgroundColor: colors.white,
        }}>
        <View
          style={{height: ph(50), flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
              <Image
                style={{height: ph(25), width: pw(25)}}
                source={images.leftArrow}
              />
            </TouchableOpacity>
            <Image
              source={{uri: selectedChat.imageUri}}
              style={{
                height: ph(50),
                width: pw(50),
                borderRadius: 100,
                left: pw(5),
              }}
            />
            <View style={{left: pw(15)}}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: ph(18),
                  fontWeight: 'bold',
                }}>
                {selectedChat.name}
              </Text>
              <Text
                style={{
                  fontSize: ph(11),
                  color: colors.black,
                  fontWeight: '500',
                }}>
                last seen {selectedChat.lastSeen} at {selectedChat.time}
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end', flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: ph(25), width: pw(25), right: pw(30)}}
                source={images.videoCall}
              />
              <Image
                style={{height: ph(25), width: pw(25), right: pw(10)}}
                source={images.call}
              />
              <Image
                style={{height: ph(25), width: pw(25)}}
                source={images.threeDots}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Messages list */}
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flex: 1,
          paddingBottom: ph(50),
          paddingRight: pw(20),
          paddingLeft: pw(20),
        }}>
        {/* hello */}
        <View
          style={{
            backgroundColor: '#D8FDD2',
            alignSelf: 'flex-start',
            marginBottom: ph(5),
            padding: ph(10),
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            position: 'relative',
            width: '70%',
          }}>
          <Text>{selectedChat.message}</Text>

          {/* Custom pointy top-right corner */}
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: -8,
              width: 0,
              height: 0,
              borderRightColor: 'transparent',
              borderTopWidth: ph(10),
              borderTopColor: '#D8FDD2',
              borderLeftWidth: 8,
              borderLeftColor: 'transparent',
            }}
          />
        </View>
        {/* Messages from users */}
        {messages.map((message, index) => (
          <View
            key={index}
            style={{
              backgroundColor: '#D8FDD2',
              alignSelf: 'flex-end',
              marginBottom: ph(5),
              padding: ph(10),
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              position: 'relative',
              width: '70%',
            }}>
            <Text>{message}</Text>

            {/* Custom pointy top-right corner */}
            <View
              style={{
                position: 'absolute',
                top: 0,
                right: -8, // Move it to the right of the bubble
                width: 0,
                height: 0,
                borderLeftColor: 'transparent',
                borderTopWidth: ph(10),
                borderTopColor: '#D8FDD2', // Same as bubble color
                borderRightWidth: 8,
                borderRightColor: 'transparent',
              }}
            />
          </View>
        ))}
      </ScrollView>

      {/* Footer and text input */}
      <View
        style={{
          paddingRight: pw(10),
          paddingLeft: pw(10),
          marginBottom: ph(5),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: colors.white,
              borderRadius: 50,
              flexDirection: 'row',
              alignItems: 'center',
              flex: 0.98,
              justifyContent: 'space-between',
              padding: '2%',
            }}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Image
                source={images.emoji}
                style={{
                  height: ph(22),
                  width: pw(22),
                  alignSelf: input.length >= 30 ? 'flex-end' : 'center',
                }}
              />
              <TextInput
                placeholder="Message"
                style={{
                  width: input === '' ? pw(172) : pw(247),
                  fontSize: ph(16),
                  padding: 0,
                  left: 3,
                }}
                multiline
                value={input}
                onChangeText={text => {
                  setInput(text);
                }}
              />
            </View>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Image
                source={images.attach}
                style={{
                  height: ph(22),
                  width: pw(22),
                  alignSelf: input.length > 30 ? 'flex-end' : 'center',
                  right: input === '' ? pw(25) : 0,
                }}
              />
              {input === '' && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#909598',
                    borderRadius: 100,
                    height: ph(22),
                    width: ph(22),
                    right: pw(15),
                  }}>
                  <Text
                    style={{
                      color: colors.white,
                      fontSize: ph(15),
                      fontWeight: 'bold',
                    }}>
                    ₹
                  </Text>
                </View>
              )}
              {input === '' && (
                <Image
                  source={images.grayCamera}
                  style={{
                    height: ph(22),
                    width: ph(22),
                  }}
                />
              )}
            </View>
          </View>
          {/* Send Button */}
          <TouchableOpacity
            style={{
              backgroundColor: colors.green,
              borderRadius: 100,
              alignItems: 'center',
              padding: '2%',
            }}
            onPress={sendMessage}>
            {input === '' && (
              <Image
                source={images.mic}
                style={{
                  height: ph(22),
                  width: ph(22),
                }}
              />
            )}
            {input !== '' && (
              <Image
                source={images.messageSend}
                style={{
                  height: ph(22),
                  width: ph(22),
                  alignSelf: 'center',
                  left: 3,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
