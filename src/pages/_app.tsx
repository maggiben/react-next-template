import App from 'next/app'
import type { AppProps } from 'next/app';
import i18n from '@utils/i18n';
import { I18nextProvider } from 'react-i18next';
import { theme } from '@fravega-it/bumeran-ds-fvg';
import styled, { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import StyledComponentsRegistry from '@helpers/registry';
import getConfig from "next/config";

const Container = styled.div`
    // background-color: ${({ theme }) => theme.colors.neutral[100]};
    // background-color: white;
`;

const ClientFrontApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledComponentsRegistry>
        <RecoilRoot>
          <I18nextProvider i18n={i18n}>
            <Container>
              <Component {...pageProps} />
            </Container>
          </I18nextProvider>
        </RecoilRoot>
      </StyledComponentsRegistry>
    </ThemeProvider>
  );
};

export default ClientFrontApp;

ClientFrontApp.getInitialProps = async ( appContext: any ): Promise<any> => {
    const appProps = await App.getInitialProps(appContext);
    const config = getConfig();
    /*
     * Config is passed here but it not intended to be used
     * by it's descendants specially services, please use next's getConfig() function
     */
    return { ...appProps, ...config };
}
  