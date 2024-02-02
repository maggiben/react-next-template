import { useSearchParams } from 'next/navigation';
import { theme, Heading, TextBody } from '@fravega-it/bumeran-ds-fvg';
import styled, { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { CU_CLIENT_FRONT_404_PAGE_VIEW, trackEvent } from '@utils/analytics';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
  gap: 8px;
  text-align: center;

  img {
    margin: 0 auto 10px;
  }
`;

const NotFound = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const oldSearchParams = searchParams.get('oldSearchParams');
  const message = searchParams.get('message');

  trackEvent({ event: CU_CLIENT_FRONT_404_PAGE_VIEW, payload: { message }});
  return (
    <ThemeProvider theme={theme}>
      <Container data-testid="not-found-container">
        <Heading>{message}</Heading>
        <TextBody><Link href={{ pathname: '/', /* query: oldSearchParams this can cause infinite loop */ }}>{t('go home')}</Link></TextBody>
      </Container>
    </ThemeProvider>
  );
};

export default NotFound;
