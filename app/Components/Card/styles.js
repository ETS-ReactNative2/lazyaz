import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  background: {
    width: '$deviceWidth',
    height: '160rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    width: '$deviceWidth',
    height: '160rem',
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
});

export default styles;
