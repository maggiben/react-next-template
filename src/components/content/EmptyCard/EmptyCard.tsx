import {
  SearchPictogram,
  Heading,
  TextBody,
} from "@fravega-it/bumeran-ds-fvg";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { SpaceTop } from "@components/Spacing/Spacing";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.m};
`;

const Circle = styled.div`
  position: flex;
  padding: ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.colors.violet[200]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyCard = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Center data-testid="empty-container">
        <Circle data-testid="circle">
          <SearchPictogram size="xl" />
        </Circle>
        <SpaceTop size="m" />
        <Heading size="l">{t('no results')}</Heading>
      </Center>
    </Container>
  );
};

export default EmptyCard;
