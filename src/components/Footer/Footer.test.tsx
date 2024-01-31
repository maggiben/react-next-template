import React from 'react';
import { renderer } from '@helpers/testing';
import '@testing-library/jest-dom';
import Footer from './';
import { expect } from '@jest/globals';


describe('Footer', () => {
  it('renders the Footer component', () => {
    const tree = renderer.create(<Footer />);
    expect(tree).toMatchSnapshot();
  });
});
