import type { AppProps } from 'next/app';
import { theme } from '@fravega-it/bumeran-ds-fvg';
import styled, { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import StyledComponentsRegistry from '@helpers/registry';

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

const App = ({ Component, pageProps }: AppProps) => {
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

export default App;
