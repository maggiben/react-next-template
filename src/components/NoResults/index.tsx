import {
  SearchPictogram,
  Heading,
  TextBody
} from "@fravega-it/bumeran-ds-fvg";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { SpaceTop } from "@components/Spacing/Spacing";
import { CU_CLIENT_FRONT_NO_RESULTS, trackEvent } from "@utils/analytics";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Card = styled.div`
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

interface NoResultsProps {
  message?: string;
}

const NoResults = (props: NoResultsProps) => {
  const { t } = useTranslation();
  trackEvent({ event: CU_CLIENT_FRONT_NO_RESULTS, payload: props.message })
  return (
    <Card>
      <Center data-testid="noresults-container">
        <Circle data-testid="circle">
          <SearchPictogram size="xl" />
        </Circle>
        <SpaceTop size="m" />
        <Heading size="l">{t('no results for')}</Heading>
        <SpaceTop size="xs" />
        <Heading color="violet">{props.message}</Heading>
        <TextBody as="span">
          {t('no results help')}
        </TextBody>
      </Center>
    </Card>
  )
}

export default NoResults;