import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const deviceWidth = Dimensions.get('window').width;
const buttonDistance = deviceWidth / 8;

const styles = EStyleSheet.create({
  statusbarColor: '$primaryGrey',
  mainContainer: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    bottom: buttonDistance,
    alignItems: 'center',
    paddingTop: '20rem',
  },
  image: {
    width: deviceWidth,
    resizeMode: 'cover',
  },
  text: {
    textAlign: 'center',
    lineHeight: '40rem',
    color: '$primaryText',
    fontFamily: Fonts.type.xlight,
    fontSize: '42rem',
    '@media android': {
      paddingBottom: '15rem',
    },
  },
});

export default styles;
