import { useState, useMemo } from 'react';
import { Grid, GridItem, DropdownButton } from "@fravega-it/bumeran-ds-fvg";
import Card from './Card/Card';
import { FormValues } from '@components/forms/SearchForm/SearchForm';
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { useRouter } from 'next/router';
import Welcome from '@components/content/Welcome/Welcome';
import SearchForm from '@components/forms/SearchForm/SearchForm';

const Container = styled.div`
  display: block;
  height: calc(100vh - (80px + 2rem));
  overflow-y: scroll;
  width: 100%;
`;

const Centered = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SpaceTop = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-top: ${({ theme, size }) => theme.spacing[size]};
`;

const Content = (): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation();
  const [, setDropdownButtonOpen] = useState<boolean>(false);

  const onSearch = (query?: FormValues) => {
    setDropdownButtonOpen(false);
    if (query) {
      router.push({
        pathname: document.location.pathname,
        query,
      });
    }
  }

  const hasQuery = useMemo(() => router.query && Object.keys(router.query as Record<string, unknown>).length > 0, [ router.query ]);

  return (
    <Centered>
      <Container>
        <Grid>
          <GridItem xs={12}>
            <Welcome />
            <SpaceTop size='xl' />
            <SearchForm onSearch={onSearch} {...router.query} />
            <SpaceTop size='xl' />
            { hasQuery && <Card/> }
          </GridItem>
        </Grid>
      </Container>
    </Centered>
  );
};

export default Content;
