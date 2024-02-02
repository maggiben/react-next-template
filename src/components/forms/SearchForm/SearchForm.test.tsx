import React from 'react';
import { renderer } from '@helpers/testing';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from './SearchForm';
import { expect } from '@jest/globals';
import i18next from 'i18next';
import { useSearchParams } from 'next/navigation';

// jest.mock('next/navigation');

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

const mockUseSearchParams = useSearchParams as jest.Mock;

describe('SearchForm', () => {
  beforeAll(() => {
    const mockedSearchParams = new URLSearchParams();
    mockUseSearchParams.mockReturnValue(mockedSearchParams);
  });
  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.resetModules();
    jest.resetAllMocks();
  });

  it('renders the SearchForm component with default values', () => {
    const mockedSearchParams = new URLSearchParams({
      documentNumber: '3000001',
      documentType: 'dni',
    });
    const onSearch = jest.fn();
    mockUseSearchParams.mockReturnValue(mockedSearchParams);
    const tree = renderer.renderWithI18n(<SearchForm onSearch={onSearch} />);
    expect(tree.baseElement.innerHTML).toMatchSnapshot();
    const cleanSearchMock = new URLSearchParams();
    mockUseSearchParams.mockReturnValue(cleanSearchMock);
  });

  it('renders the SearchForm component with default values', () => {
    const mockedSearchParams = new URLSearchParams({
      email: 'tom@fravega.com.ar',
    });
    const onSearch = jest.fn();
    mockUseSearchParams.mockReturnValue(mockedSearchParams);
    const tree = renderer.renderWithI18n(<SearchForm onSearch={onSearch} />);
    expect(tree.baseElement.innerHTML).toMatchSnapshot();
    const cleanSearchMock = new URLSearchParams();
    mockUseSearchParams.mockReturnValue(cleanSearchMock);
  });

  it('renders the SearchForm component', () => {
    const onSearch = jest.fn();
    const tree = renderer.renderWithI18n(<SearchForm onSearch={onSearch} />);
    expect(tree.baseElement.innerHTML).toMatchSnapshot();
  });

  it('search with input with value dni', () => {
    const onSearch = jest.fn();
    const dni = '3000001';
    const tree = renderer.renderWithI18n(<SearchForm onSearch={onSearch} />);
    const searchInput = tree.getByRole('textbox', { name: i18next.t('dni') });
    const searchButton = tree.getByRole('button', { name: i18next.t('search') });//, { name: 'Accept' })[0];

    fireEvent.change(searchInput, { target: { value: dni } });
    fireEvent.click(searchButton);
    expect(onSearch).toHaveBeenCalledWith({
      documentNumber: dni,
      documentType: 'dni',
    });
  });

  it('search with input with value dni and keypress', () => {
    const onSearch = jest.fn();
    const dni = '3000001';
    const tree = renderer.renderWithI18n(<SearchForm onSearch={onSearch} />);
    const searchInput = tree.getByRole('textbox', { name: i18next.t('dni') });

    fireEvent.change(searchInput, { target: { value: dni } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(onSearch).toHaveBeenCalledWith({
      documentNumber: dni,
      documentType: 'dni',
    });
  });

  it('search with input with value email', () => {
    const onSearch = jest.fn();
    const email = 'tom@fravega.com.ar';
    const tree = renderer.renderWithI18n(<SearchForm onSearch={onSearch} />);
    const searchInput = tree.getByRole('textbox', { name: i18next.t('dni') });
    const searchButton = tree.getByRole('button', { name: i18next.t('search') });//, { name: 'Accept' })[0];
    const container = tree.getByTestId('select-document-type');
    const input = container.querySelector('input');
    
    fireEvent.change(searchInput, { target: { value: email } });

    if (input) {
      fireEvent.click(input);
      const menu = container.firstChild?.firstChild?.childNodes[1];
      const dniItem = menu?.firstChild?.childNodes[0];
      const emailItem = menu?.firstChild?.childNodes[1];
      if (emailItem) {
        fireEvent.click(emailItem);
        fireEvent.click(searchButton);
        expect(onSearch).toHaveBeenCalledWith({
          email,
        });
      }
    }
  });

  it('clean search input', () => {
    const onSearch = jest.fn();
    const dni = '3000001';
    const tree = renderer.renderWithI18n(<SearchForm onSearch={onSearch} />);
    const searchInput = tree.getByRole('textbox', { name: i18next.t('dni') }) as HTMLInputElement;
    const searchButton = tree.getByRole('button', { name: i18next.t('search') });//, { name: 'Accept' })[0];

    fireEvent.change(searchInput, { target: { value: dni } });
    expect(searchInput.value).toBe(dni);
    const resetLink = tree.getByRole('reset');
    fireEvent.click(resetLink);
    expect(searchInput.value).toBe('');    
  });

  it('error if search input is empty', () => {
    const onSearch = jest.fn();
    const tree = renderer.renderWithI18n(<SearchForm onSearch={onSearch} />);
    const searchButton = tree.getByRole('button', { name: i18next.t('search') });//, { name: 'Accept' })[0];

    fireEvent.click(searchButton);
    expect(onSearch).not.toHaveBeenCalled();
  });
});
