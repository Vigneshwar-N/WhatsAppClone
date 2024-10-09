import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Dimensions} from 'react-native';

// Get the dimensions of the device's screen
const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

// Conversion utility function that dynamically scales to all devices
export const pxToHeight = px => {
  return hp((px / SCREEN_HEIGHT) * 100);
};

export const pxToWidth = px => {
  return wp((px / SCREEN_WIDTH) * 100);
};
export {pxToHeight as ph, pxToWidth as pw};

export {hp, wp};
