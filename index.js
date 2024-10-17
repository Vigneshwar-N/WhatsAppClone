/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Settings from './src/screens/_Settings';
import _Chats from './src/screens/_Chats';
import App from './App';
import NewGroup from './src/screens/_NewGroup';

AppRegistry.registerComponent(appName, () => NewGroup);
