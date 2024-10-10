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
import React, {useState} from 'react';
import {data} from '../../constants/data/list';
import {colors} from '../../constants/color/colors';
import {images} from '../../constants/images/image';

export default function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]); // State to store chat messages
  const image = data[0];

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]); // Add the input message to the array
      setInput(''); // Clear the input field after sending the message
    }
  };

  return (
    <ImageBackground source={images.wallpaper} style={{flex: 1}}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 10,
          paddingBottom: 5,
          backgroundColor: colors.white,
        }}>
        <View style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
              <Image
                style={{height: 25, width: 25}}
                source={images.leftArrow}
              />
            </TouchableOpacity>
            <Image
              source={{uri: image.imageUri}}
              style={{height: 50, width: 50, borderRadius: 100, left: 5}}
            />
            <View style={{left: 15}}>
              <Text
                style={{color: colors.black, fontSize: 18, fontWeight: 'bold'}}>
                {image.name}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  color: colors.black,
                  fontWeight: '500',
                }}>
                last seen {image.lastSeen} at {image.time}
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end', flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{height: 25, width: 25, right: 30}}
                source={images.videoCall}
              />
              <Image
                style={{height: 25, width: 25, right: 10}}
                source={images.call}
              />
              <Image
                style={{height: 25, width: 25}}
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
          alignItems: 'flex-end', // Align messages to the right
          flex: 1,
          paddingBottom: 50,
          paddingRight: 20,
          paddingLeft: 20,
        }}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={{
              backgroundColor: '#D8FDD2',
              alignSelf: 'flex-end', // Align message bubbles to the right
              marginBottom: 5,
              padding: 10,

              // Curve only this part
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              transform: [{rotate: '0deg'}],
            }}>
            <Text>{message}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Footer and text input */}
      <View
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          marginBottom: 5,
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
                  height: 22,
                  width: 22,
                  alignSelf: input.length >= 30 ? 'flex-end' : 'center',
                }}
              />
              <TextInput
                placeholder="Message"
                style={{
                  width: input === '' ? 172 : 247,
                  fontSize: 16,
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
                  height: 22,
                  width: 22,
                  alignSelf: input.length > 30 ? 'flex-end' : 'center',
                  right: input === '' ? 25 : 0,
                }}
              />
              {input === '' && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#909598',
                    borderRadius: 100,
                    height: 22,
                    width: 22,
                    right: 15,
                  }}>
                  <Text
                    style={{
                      color: colors.white,
                      fontSize: 15,
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
                    height: 22,
                    width: 22,
                  }}
                />
              )}
            </View>
          </View>
          {/* send */}
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
                  height: 22,
                  width: 22,
                }}
              />
            )}
            {input !== '' && (
              <Image
                source={images.messageSend}
                style={{
                  height: 22,
                  width: 22,
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
