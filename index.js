/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Search from './src/components/common/Search';
import _Chats from './src/screens/_Chats';
import ChatScreen from './src/screens/_ChatScreen';
import Updates from './src/screens/_Updates';
import Community from './src/screens/_Community';

AppRegistry.registerComponent(appName, () => Community);
