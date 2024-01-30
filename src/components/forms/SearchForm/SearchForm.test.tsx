import React from 'react';
import { renderer } from '@helpers/testing';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from './SearchForm';
import { expect } from '@jest/globals';
import i18next from 'i18next';

describe('SearchForm', () => {
  it('renders the SearchForm component', () => {
    const onSearch = jest.fn();
    const tree = renderer.renderWithI18n(<SearchForm onSearch={onSearch} />);
    expect(tree).toMatchSnapshot();
  });

  it('search with input', () => {
    const onSearch = jest.fn();
    const tree = renderer.renderWithI18n(<SearchForm onSearch={onSearch} />);
    const searchInput = tree.getByRole('textbox', { name: i18next.t('dni') });
    const searchButton = tree.getByRole('button', { name: i18next.t('search') });//, { name: 'Accept' })[0];

    fireEvent.click(searchButton);
    expect(onSearch).toHaveBeenCalledWith({
      documentNumber: '',
      documentType: 'dni',
    });
  });
  
  it('search with input with value', () => {
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

  it('search with input with value', () => {
    const onSearch = jest.fn();
    const documentNumenr = '3000001';
    const email = 'tom@fravega.com.ar';
    const documentType = 'email';
    const tree = renderer.renderWithI18n(<SearchForm onSearch={onSearch} />);
    
    const select = tree.getByText(`${i18next.t('search by')}...`);
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
});
