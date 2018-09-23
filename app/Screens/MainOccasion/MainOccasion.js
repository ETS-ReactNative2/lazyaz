import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import {
  BottomBar,
  ScrollContainer,
  SliderEntry,
  connectAlert,
} from '../../Components';
import { getMainOccasion } from '../../Actions/MainOccasion';
import styles from './styles';

class MainOccasion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getMainOccasion());
  }

  componentWillReceiveProps(nextProps) {
    const { alertWithType } = this.props;
    if (nextProps.error) {
      alertWithType('error', 'Error', nextProps.error);
    }
  }

  renderItem = ({ item }) => <SliderEntry data={item} />;

  render() {
    const { occasions } = this.props;
    const { currentIndex, isLoading } = this.state;
    return (
      <ScrollContainer>
        {!isLoading && occasions && (
          <View>
            <Carousel
              data={occasions}
              renderItem={this.renderItem}
              onSnapToItem={(index) => {
                this.setState({ currentIndex: index });
              }}
              sliderWidth={styles.$slider}
              itemWidth={styles.$item}
              inactiveSlideScale={0.75}
              inactiveSlideOpacity={0.5}
              enableMomentum
              activeSlideAlignment="start"
              containerCustomStyle={styles.slider}
              activeAnimationType="spring"
              activeAnimationOptions={{
                friction: 4,
                tension: 40,
              }}
            />
            <BottomBar destination={occasions[currentIndex]} />
            <Pagination
              dotsLength={occasions.length}
              activeDotIndex={currentIndex}
              dotColor={styles.$dotColor}
              dotStyle={styles.paginationDot}
              inactiveDotOpacity={1}
              inactiveDotColor={styles.$inactiveDotColor}
              inactiveDotScale={0.6}
              containerStyle={styles.paginationContainer}
            />
          </View>)
        }
      </ScrollContainer>
    );
  }
}

MainOccasion.propTypes = {
  dispatch: PropTypes.func,
  error: PropTypes.string,
  alertWithType: PropTypes.func,
  occasions: PropTypes.array,
};

const mapStateToProps = state => ({
  occasions: state.occasions.occasions,
  error: state.occasions.error,
  isLoading: state.occasions.isLoading,
});

export default connect(mapStateToProps)(connectAlert(MainOccasion));
