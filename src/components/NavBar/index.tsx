import Image from "next/image";
import Link from 'next/link';
import {
  Heading,
  Grid,
  GridItem,
  theme,
} from '@fravega-it/bumeran-ds-fvg';
import { useTranslation } from 'react-i18next';
import React from 'react';
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
            <Link href='/'><Image priority src="/static/images/logo-fravega.png" alt={t('client finder')} style={{marginRight: theme.spacing.s}} width={130} height={24}/></Link>
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
