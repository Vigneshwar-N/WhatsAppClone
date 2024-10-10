/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Call from './src/screens/_Call';
import Updates from './src/screens/_Updates';
import ChatScreen from './src/screens/_ChatScreen';
import _Chats from './src/screens/_Chats';
import Community from './src/screens/_Community';
import Splash from './src/screens/_Splash';

AppRegistry.registerComponent(appName, () => Splash);
