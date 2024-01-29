import { default as baseRenderer } from 'react-test-renderer';
import { render } from '@testing-library/react';
import i18n from '@utils/i18n';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { theme, IDefaultTheme } from '@fravega-it/bumeran-ds-fvg';
import React, { ReactElement } from 'react';

/**
 * Helper used to render components for testing.
 * The function appends the theme to the children.
 * */
interface IRenderer {
  create: (children: ReactElement) => any;
  baseRenderer: (children: ReactElement) => any;
  renderWithTheme: (children: ReactElement, theme: IDefaultTheme) => any;
  renderWithI18n: (children: ReactElement) => any;
}

export const renderer: IRenderer = {
  create: (children: ReactElement) =>
    render(
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
  ),
  renderWithTheme: (children: ReactElement, theme: IDefaultTheme) =>
    render(
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
  ),
  baseRenderer: (children: ReactElement) =>
    baseRenderer.create(
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
  ),
  renderWithI18n: (children: ReactElement) => 
    render(
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
  ),
};