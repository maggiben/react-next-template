import App from 'next/app'
import type { AppProps } from 'next/app';
import { theme } from '@fravega-it/bumeran-ds-fvg';
import styled, { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import StyledComponentsRegistry from '@helpers/registry';
import getConfig from "next/config";

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

const ClientFrontApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <StyledComponentsRegistry>
                <RecoilRoot>
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                </RecoilRoot>
            </StyledComponentsRegistry>
        </ThemeProvider>
    );
};

export default ClientFrontApp;

ClientFrontApp.getInitialProps = async ( appContext: any ): Promise<any> => {
    const appProps = await App.getInitialProps(appContext);
    const config = getConfig();


    // eslint-disable-next-line no-console
    console.log('process.env:', process.env);
    const searchEndpoint = process.env.SEARCH_ENDPOINT;
    // eslint-disable-next-line no-console
    console.log('SEARCH_ENDPOINT:', searchEndpoint);
    // eslint-disable-next-line no-console
    console.log('appProps', appProps);
    // eslint-disable-next-line no-console
    console.log('appContext', appContext);
    // eslint-disable-next-line no-console
    console.log('config', config);
    return { ...appProps, ...config };
}
  