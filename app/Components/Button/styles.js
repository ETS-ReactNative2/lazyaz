import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  $gradientColorOne: '$brightOrange',
  $gradientColorTwo: '$softRed',
  gradientWrapper: {
    borderRadius: 100,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  text: {
    textAlign: 'center',
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.small,
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
  buttonText: {
    letterSpacing: 1,
    marginBottom: '7rem',
    opacity: 0.7,
  },
  logo: {
    resizeMode: 'contain',
    paddingHorizontal: '5%',
  },
});

export default styles;
