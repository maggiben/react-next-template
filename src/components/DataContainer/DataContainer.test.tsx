import React from 'react';
import { renderer } from '@helpers/testing';
import '@testing-library/jest-dom';
import {
  screen,
  getAllByRole,
} from "@testing-library/react";
import DataContainer from './DataContainer';
import { expect } from '@jest/globals';

// Mock the utility function used in the component
// jest.mock('@utils/array', () => ({
//   splitIntoTuples: jest.fn(data => data), // Mock the splitIntoTuples function to return the input data
// }));

describe('DataContainer', () => {
  const data = [
    {
      label: 'value',
    }, {
      label: 'value',
    }, {
      label: 'value',
    }, {
      label: 'value',
    },{
      label: 'value',
    },{
      label: 'value',
    },{
      label: 'value',
    },{
      label: 'value',
    },
  ];

  it('renders the DataContainer component', () => {
    const tree = renderer.create(<DataContainer data={data} columns={2} />);
    expect(tree).toMatchSnapshot();
    // expect(tree).toBeInTheDocument();
  });

  it('renders the correct number of rows and columns', () => {
    const { getAllByRole } = renderer.create(<DataContainer data={data} columns={2} />);
    // Query all cells using the 'cell' role
    const cells = getAllByRole('cell');

    // Check if the correct number of cells is rendered
    expect(cells).toHaveLength(data.length);

    // You can also perform additional assertions on the cells if needed
    cells.forEach((cell: HTMLTableCellElement) => {
      expect(cell).toHaveTextContent(/labelvalue/ig); // For example, check if each cell contains text matching the pattern "value1", "value2", etc.
    });
  });
});