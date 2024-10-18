/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import _Chats from './src/screens/_Chats';
import App from './App';
import CameraScreen from './src/screens/CameraScreen';

AppRegistry.registerComponent(appName, () => CameraScreen);
