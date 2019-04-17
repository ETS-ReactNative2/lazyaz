import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from './index';

test('Card component renders correctly', () => {
  const props = {
    image: '',
    title: '',
    places: 0,
    height: '10%',
  };
  const tree = renderer.create(<Card {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
