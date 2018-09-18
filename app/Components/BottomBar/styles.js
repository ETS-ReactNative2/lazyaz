import EStyleSheet from 'react-native-extended-stylesheet';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Fonts } from '../../Themes';

const styles = EStyleSheet.create({
  $buttonText: '$white',
  container: {
    marginHorizontal: wp(10),
    marginVertical: '5rem',
  },
  setsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10%',
  },
  title: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.occasion,
    color: '$primaryColor',
  },
  description: {
    textAlign: 'justify',
    marginBottom: '20rem',
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.chip,
    color: '$description',
  },
  sets: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.heading,
    color: '$sets',
    marginHorizontal: '5rem',
  },
});

export default styles;
