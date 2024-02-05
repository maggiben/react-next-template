import React from 'react';
import { renderer } from '@helpers/testing';
import '@testing-library/jest-dom';
import ValidationList from './ValidationList';
import { expect } from '@jest/globals';

// Mock the utility function used in the component
// jest.mock('@utils/array', () => ({
//   splitIntoTuples: jest.fn(data => data), // Mock the splitIntoTuples function to return the input data
// }));

describe('DataContainer', () => {
  const person = {
    id: '123',
    name: 'John',
    lastname: 'Doe',
    age: '30',
    validations: {
      email: true,
      renaper: false,
      facephi: true,
    },
    identification: {
      type: 'ID',
      number: 123456789,
      expiration: '2022-12-31',
    },
    email: {
      address: 'john.doe@example.com',
      confirmed: true,
      expiration: '2022-12-31',
    },
    selected: false,
    status: {
      label: 'Active',
      color: 'green',
    },
    phone: {
      number: 987654321,
      prefix: 1,
      codeArea: 123,
    },
    address: {
      zipCode: '12345',
      street: 'Main Street',
      number: '123',
      floor: '2',
      apartment: 'A',
      city: 'Cityville',
      state: 'CA',
      country: 'USA',
    },
  };

  it('renders the DataContainer component', () => {
    const tree = renderer.create(<ValidationList person={person} />);
    expect(tree).toMatchSnapshot();
  });

});
