import { Dimensions } from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;

const metrics = {
  $deviceWidth: entireScreenWidth,
  $tabWidth: entireScreenWidth / 4,
  $rem: entireScreenWidth / 380,
};

export default metrics;
