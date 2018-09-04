import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $gradientColorOne: '$greyLight',
  $gradientColorTwo: '$greyMedium',
  $gradientColorThree: '$greyDark',
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '$overlay',
  },
});

export default styles;
