import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  $gradientColorOne: '$brightOrange',
  $gradientColorTwo: '$softRed',
  gradientWrapper: {
    borderRadius: 100,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  text: {
    textAlign: 'center',
    fontFamily: Fonts.type.bold,
    fontSize: `${Fonts.size.small}rem`,
    letterSpacing: 1,
  },
  lightButton: {
    backgroundColor: '$white',
  },
  darkButton: {
    backgroundColor: '$black',
  },
  lightText: {
    color: '$white',
  },
  darkText: {
    color: '$black',
  },
  logo: {
    resizeMode: 'contain',
    paddingRight: '10%',
  },
});

export default styles;
