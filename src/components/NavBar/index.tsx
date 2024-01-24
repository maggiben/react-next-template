import Image from "next/image";
import { Heading, Grid, GridItem } from '@fravega-it/bumeran-ds-fvg';
import { useTranslation } from 'react-i18next';
import React from 'react';
import logo from '@images/logo-fravega.png';
import styled from 'styled-components';

const Header = styled.div`
  height: 80px;
  border-width: 1px;
`;

const Logo = styled.div`
  display: flex;
  height: 80px;
  justify-content: start;
  align-items: center;
`;

const User = styled.div`
  display: flex;
  height: 80px;
  justify-content: start;
  align-items: center;
`;

export default function NavBar(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Header>
      <Grid>
        <GridItem xs={8} justifySelf="stretch" alignSelf="center">
          <Logo>
            <Image priority src={logo} alt="Búmeran logo" style={{marginRight: '12px'}} width={130}/>
            <Heading color="neutral" size="s">{t('client finder')}</Heading>
          </Logo>
        </GridItem>
        <GridItem xs={4} justifySelf="end" alignSelf="center">
          <User />
        </GridItem>
      </Grid>
    </Header>
  );
}
