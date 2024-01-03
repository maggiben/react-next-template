import { default as baseRenderer } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from '@fravega-it/bumeran-ds-fvg';
import React, { ReactElement } from 'react';

/**
 * Helper used to render components for testing.
 * The function appends the theme to the children.
 * */
interface IRenderer {
    create: (children: ReactElement) => any;
}

export const renderer: IRenderer = {
  create: (children: ReactElement) =>
    baseRenderer.create(
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
};
