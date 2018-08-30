import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '36rem',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextContainer: {
    position: 'absolute',
    top: 0,
    marginTop: '5%',
  },
  textContainer: {
    alignSelf: 'flex-end',
    marginBottom: '3%',
  },
  topLeftItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  topRightItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bottomItems: {
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    marginBottom: '10%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '$overlay',
  },
  text: {
    fontFamily: Fonts.type.regular,
    fontSize: `${Fonts.size.small}rem`,
    color: '$white',
    justifyContent: 'flex-end',
  },
  headerText: {
    textAlign: 'center',
    fontFamily: Fonts.type.bold,
    fontSize: `${Fonts.size.small}rem`,
    letterSpacing: 1,
    color: '$white',
  },
  textInput: {
    alignContent: 'flex-start',
    fontFamily: Fonts.type.semibold,
    fontSize: `${Fonts.size.small}rem`,
    letterSpacing: 1,
    color: '$white',
    '@media ios': {
      paddingBottom: '5rem',
    },
    '@media android': {
      paddingBottom: '-5rem',
    },
  },
  image: {
    width: '100%',
    height: '100%',
  },
  profileImage: {
    resizeMode: 'contain',
  },
  arrowLeft: {
    marginLeft: '10%',
  },
  row: {
    paddingVertical: '10rem',
  },
});

export default styles;
