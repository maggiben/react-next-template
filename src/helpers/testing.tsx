/* istanbul ignore file */
import { default as baseRenderer } from 'react-test-renderer';
import { render, RenderResult } from '@testing-library/react';
import i18n from '@utils/i18n';
import { I18nextProvider } from 'react-i18next';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { theme, IDefaultTheme } from '@fravega-it/bumeran-ds-fvg';
import React, { ReactElement, useEffect } from 'react';
import '@testing-library/jest-dom'

/**
 * Helper used to render components for testing.
 * The function appends the theme to the children.
 * */
interface IRenderer {
  create: (children: ReactElement) => RenderResult;
  baseRenderer: (children: ReactElement) => baseRenderer.ReactTestRenderer;
  renderWithTheme: (children: ReactElement, theme: IDefaultTheme) => RenderResult;
  renderWithI18n: (children: ReactElement) => RenderResult;
}

export const renderer: IRenderer = {
  create: (children: ReactElement): RenderResult =>
    render(
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
  ),
  renderWithTheme: (children: ReactElement, theme: IDefaultTheme): RenderResult =>
    render(
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
  ),
  baseRenderer: (children: ReactElement): baseRenderer.ReactTestRenderer =>
    baseRenderer.create(
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
  ),
  renderWithI18n: (children: ReactElement): RenderResult => 
    render(
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </ThemeProvider>
  ),
};

export const RecoilValueObserver = ({ node, onChange }: {node: any, onChange: (value: any) => {}}) => {
  const value = useRecoilValue(node);
  useEffect(() => { onChange(value) }, [onChange, value]);
  return null;
};

export const RecoilStateObserver = ({ node, onChange }: {node: any, onChange: (value: any) => {}}) => {
  const value = useRecoilState(node);
  useEffect(() => { 
    onChange(value[0]) 
  }, [onChange, value]);
  return null;
};

export const RecoilResetObserver = ({ node, onChange }: {node: any, onChange: (value: any) => {}}) => {
  const value = useResetRecoilState(node);
  useEffect(() => { onChange(value()) }, [onChange, value]);
  return null;
};