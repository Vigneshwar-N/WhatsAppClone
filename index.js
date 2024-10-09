/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Search from './src/components/common/Search';
import _Chats from './src/screens/_Chats';
import ChatScreen from './src/components/common/_ChatScreen';

AppRegistry.registerComponent(appName, () => ChatScreen);
