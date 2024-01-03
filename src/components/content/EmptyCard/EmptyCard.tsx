import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Heading } from '@fravega-it/bumeran-ds-fvg'

const Card = styled.div`
  display: block;
  width: 100%;
  border-width: 1px;
  // border-style: solid;
  // border-color: ${({ theme }) => theme.colors.neutral[300]};
  // border-radius: ${({ theme }) => theme.borderRadius.m};
`;

const EmptyCard = () => {
  const { t } = useTranslation();
  return (
    <Card>
      <Heading>{t('welcome message')}</Heading>
    </Card>
  );
};

  export default EmptyCard;
