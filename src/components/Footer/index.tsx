import { useEffect, useState } from 'react';
import { TextBody, Divider, SearchIcon, UserIcon, Heading, IconButton, Grid, GridItem } from '@fravega-it/bumeran-ds-fvg';
import { useTranslation } from 'react-i18next';
import pjson from '@pjson';
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 2rem;
  border-width: 1px;
`;

const Right = styled.div`
  line-height: 2rem;
  padding-right: 6px;
  text-align: right;
`;

export default function Footer(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Container>
      <Divider />
      <Grid>
        <GridItem xs={12} justifySelf="stretch" alignSelf="start">
            <Right>
              <TextBody size="s">{`${t('version')}: ${pjson.version}`}</TextBody>
            </Right>
        </GridItem>
      </Grid>
    </Container>
  );
}
