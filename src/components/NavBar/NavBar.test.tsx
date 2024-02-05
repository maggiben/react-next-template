import React from 'react';
import { renderer } from '@helpers/testing';
import '@testing-library/jest-dom';
import NavBar from './';
import { expect } from '@jest/globals';

describe('NavBar', () => {
  it('renders the NavBar component', () => {
    const tree = renderer.create(<NavBar />);
    expect(tree).toMatchSnapshot();
  });
});
