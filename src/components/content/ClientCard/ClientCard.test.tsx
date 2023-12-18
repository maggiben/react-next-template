import React from 'react';
import { renderer } from '@helpers/testing';
import 'jest-styled-components';
import ClientCard from '.';

import { expect } from '@jest/globals';

test('Check ClientCard works', () => {
    const tree = renderer.create(<ClientCard />).toJSON();
    expect(tree).toMatchSnapshot();
});
