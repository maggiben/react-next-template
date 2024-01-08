import { useEffect, useState } from 'react';
import { TextBody, Strong, CodeIcon, UserIcon, Heading, IconButton, Grid, GridItem } from '@fravega-it/bumeran-ds-fvg';
import { useTranslation } from 'react-i18next';
import pjson from '@pjson';
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 2rem;
  border-width: 1px;
`;

const Right = styled.div`
  min-height: 2rem;
  text-align: right;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`;

const Hr = styled.div`
  border: 0px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.neutral[200]};
  height: 0px;
  margin: 0px;
`;

export default function Footer(): JSX.Element {
  const { t } = useTranslation();
  return (
    <Container>
      <Hr />
      <Grid>
        <GridItem xs={12} justifySelf="stretch" alignSelf="start">
            <Right>
                <CodeIcon size="s" color="violet" colorTone="600" />
                <TextBody size="s">
                  <Strong>{`${t('version')}: `}</Strong>
                  {pjson.version}
                </TextBody>
            </Right>
        </GridItem>
      </Grid>
    </Container>
  );
}
