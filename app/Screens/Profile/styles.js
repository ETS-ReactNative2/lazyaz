import EStyleSheet from 'react-native-extended-stylesheet';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  $gradientColorOne: '$brightOrange',
  $gradientColorTwo: '$softRed',
  $colorGrey: '$separator',
  $colorWhite: '$white',
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
    flex: 1,
    backgroundColor: '$white',
    paddingVertical: '10%',
    paddingHorizontal: '20rem',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingsContainer: {
    paddingVertical: '5%',
  },
  aboutContainer: {
    paddingTop: '5%',
  },
  subtitleContainer: {
    width: wp(60),
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
});

export default styles;
