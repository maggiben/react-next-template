import React from 'react';
import { renderer } from '@helpers/testing';
import '@testing-library/jest-dom';
import EmptyCard from './EmptyCard';
import { expect } from '@jest/globals';

describe('EmptyCard', () => {
  it('renders the EmptyCard component', () => {
    const tree = renderer.create(<EmptyCard />);
    expect(tree).toMatchSnapshot();
  });
});
