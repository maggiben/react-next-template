import { useEffect, useState } from 'react';
import { SearchIcon, UserIcon, Heading, IconButton, Grid, GridItem } from '@fravega-it/bumeran-ds-fvg'
import React from 'react';
import styled from "styled-components";

const Header = styled.div`
  height: 80px;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.violet[400]};
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
  return (
    <Header>
      <Grid>
        <GridItem xs={8} justifySelf="stretch" alignSelf="center">
          <Logo>
            <SearchIcon size="l" color="white" colorTone="600" />
            <Heading color="white">Buscador de Clientes</Heading>
          </Logo>
        </GridItem>
        <GridItem xs={4} justifySelf="end" alignSelf="center">
          <User>
            <IconButton icon={<UserIcon size="l" color="white" colorTone="600" />} />
          </User>
        </GridItem>
      </Grid>
    </Header>
  );
}
