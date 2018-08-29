import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
  },
  middleView: {
    paddingTop: '5%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '$overlay',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '240rem',
    resizeMode: 'contain',
    marginBottom: '10%',
  },
  dots: {
    resizeMode: 'contain',
    marginTop: '5%',
    marginBottom: '5%',
  },
  text: {
    textAlign: 'center',
    fontFamily: Fonts.type.bold,
    fontSize: `${Fonts.size.small}rem`,
    letterSpacing: 1,
    color: '$white',
    marginBottom: '7rem',
    opacity: 0.7,
  },
  arrow: {
    resizeMode: 'contain',
  },
});

export default styles;
