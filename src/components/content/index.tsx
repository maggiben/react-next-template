import { useState } from 'react';
import { Grid, GridItem, DropdownButton } from "@fravega-it/bumeran-ds-fvg";
import Card from './Card/Card';
import SearchForm, { FormValues } from '@components/forms/SearchForm/SearchForm';
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { useRouter } from 'next/router';

const Container = styled.div`
  display: block;
  height: calc(100vh - (80px + 2rem));
  width: 100%;
`;

const Centered = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Content = (): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation();
  const [dropdownButtonOpen, setDropdownButtonOpen] = useState<boolean>(false);

  const onSearch = (query?: FormValues) => {
    setDropdownButtonOpen(false);
    if (query) {
      router.push({
        pathname: document.location.pathname,
        query,
      });
    }
  }

  return (
    <Centered>
      <Container>
        <Grid>
          <GridItem xs={4}>
            <DropdownButton label={t('search by')} open={dropdownButtonOpen} onOpenChange={setDropdownButtonOpen}>
              <SearchForm onSearch={onSearch} {...router.query} />
            </DropdownButton>  
          </GridItem>
          <GridItem xs={12}>
            <Card/>
          </GridItem>
        </Grid>
      </Container>
    </Centered>
  );
};

export default Content;
