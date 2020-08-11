import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render Footer Component', () => {
    expect(footer.length).toEqual(1);
  });

  test('Footer has 3 anchors', () => {
    expect(footer.find('a')).toHaveLength(3);
  });

  test('Footer snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});