import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { ListItem } from './index';

test('Chip component renders correctly', () => {
  const props = {
    text: '',
    image: 0,
  };
  const tree = renderer.create(<ListItem {...props} onPress={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
