import * as array from './array';
import { expect } from '@jest/globals';

describe('array', () => {
  it('renders the array helper', () => {
    expect(array.isEqual([1,2,3,4], [1,2,3,4])).toBe(true);
    expect(array.isEqual([1,2,3,4], [1,2,3,5])).toBe(false);
    expect(array.removeProperty([{ a:1, b:2, c:3}], 'c')).toEqual([{ a:1, b: 2}]);
    expect(array.splitIntoTuples([1,2,3,4,5,6,7,8,9], 3)).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
  });
});
