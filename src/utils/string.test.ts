import * as string from './string';
import { expect } from '@jest/globals';
import i18next from 'i18next';

describe('array', () => {
  it('string helper', () => {
    expect(string.booleanToText(true)).toEqual(i18next.t('yes'));
    expect(string.booleanToText(false)).toEqual(i18next.t('no'));
    expect(string.capitalized('hello')).toEqual('Hello');
    expect(string.validateEmail('tom@fravega.com')).toBeTruthy;
    expect(string.validateEmail('tom@fravega')).toBeFalsy;
  });
});
