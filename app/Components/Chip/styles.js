import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  container: {
    width: '96rem',
    height: '24rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '$chip',
  },
  text: {
    alignItems: 'center',
    alignSelf: 'center',
    fontFamily: Fonts.type.semibold,
    fontSize: Fonts.size.chip,
    color: '$white',
    '@media ios': {
      paddingTop: '4rem',
    },
  },
});

export default styles;
