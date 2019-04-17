import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $gradientColorOne: '$greyLight',
  $gradientColorTwo: '$greyMedium',
  $gradientColorThree: '$greyDark',
  $height: '$deviceHeight',
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
  flex: {
    flex: 1,
  },
  grow: {
    flexGrow: 1,
  },
});

export default styles;
