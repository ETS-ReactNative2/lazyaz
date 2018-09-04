import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: '10%',
  },
  middleView: {
    paddingTop: '5%',
  },
  image: {
    width: '240rem',
    resizeMode: 'contain',
    marginBottom: '10%',
  },
  dots: {
    resizeMode: 'contain',
    marginTop: '5%',
    marginBottom: '5%',
  },
});

export default styles;
