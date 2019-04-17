import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Chip } from './index';

test('Chip component renders correctly', () => {
  const props = {
    places: 0,
  };
  const tree = renderer.create(<Chip {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
