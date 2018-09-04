import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignSelf: 'flex-end',
    marginBottom: '3%',
  },
  bottomItems: {
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    marginBottom: '10%',
  },
  text: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    color: '$white',
    justifyContent: 'flex-end',
  },
  textInput: {
    alignContent: 'flex-start',
    fontFamily: Fonts.type.semibold,
    fontSize: Fonts.size.small,
    letterSpacing: 1,
    color: '$white',
    '@media ios': {
      paddingBottom: '5rem',
    },
    '@media android': {
      paddingBottom: '-5rem',
    },
  },
  row: {
    paddingVertical: '10rem',
  },
});

export default styles;
