/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import _Chats from './src/screens/_Chats';
import LinkDevice from './src/screens/LinkDevice';
import Payments from './src/screens/Payments';

AppRegistry.registerComponent(appName, () => Payments);
