import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '50%',
    marginTop: '10rem',
  },
  background: {
    width: '$deviceWidth',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    width: '$deviceWidth',
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '$overlay',
    opacity: 0.6,
  },
  title: {
    textAlign: 'center',
    fontFamily: Fonts.type.black,
    fontSize: Fonts.size.base,
    color: '$white',
    letterSpacing: 0.9,
  },
  text: {
    marginHorizontal: '50rem',
    marginTop: '10rem',
    textAlign: 'center',
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    color: '$white',
  },
});

export default styles;
