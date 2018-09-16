import EStyleSheet from 'react-native-extended-stylesheet';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  $gradientColorOne: '$brightOrange',
  $gradientColorTwo: '$softRed',
  $colorGrey: '$separator',
  $colorWhite: '$white',
  mainContainer: {
    flex: 1,
    backgroundColor: '$white',
  },
  gradientContainer: {
    height: '265rem',
  },
  textContainer: {
    marginTop: '32rem',
    marginHorizontal: '20rem',
  },
  mainButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '20rem',
  },
  buttonContainer: {
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: '$white',
    paddingVertical: '10%',
    paddingHorizontal: '20rem',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  settingsContainer: {
    marginTop: '3%',
    paddingVertical: '3%',
  },
  aboutContainer: {
    marginTop: '5%',
    paddingVertical: '5%',
  },
  textWhite: {
    color: '$white',
  },
  text: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.heading,
    color: '$primaryColor',
  },
  textName: {
    fontFamily: Fonts.type.ultra,
    fontSize: Fonts.size.profileName,
  },
  textSectionHeading: {
    fontFamily: Fonts.type.black,
    fontSize: Fonts.size.small,
    letterSpacing: 1,
    color: '$primaryColor',
  },
  textSectionHeadingButton: {
    color: '$blue',
  },
  textSubtitle: {
    color: '$brightOrange',
  },
  textSectionBody: {
    paddingVertical: '3%',
  },
  rowTouchable: {
    paddingVertical: '5%',
  },
  rowView: {
    marginVertical: '5%',
  },
});

export default styles;
