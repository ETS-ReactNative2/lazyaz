import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $slider: '$sliderWidth',
  $item: '$itemWidth',
  $backgroundColor: '$white',
  $dotColor: '$paginationDot',
  $inactiveDotColor: '$primaryColor',
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    marginTop: 15,
    overflow: 'visible',
  },
  background: {
    height: '$deviceHeight',
  },
  paginationDot: {
    width: '10rem',
    height: '10rem',
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: '$primaryColor',
  },
});

export default styles;
