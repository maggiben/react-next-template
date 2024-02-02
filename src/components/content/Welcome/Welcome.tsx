import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Heading, TextBody } from '@fravega-it/bumeran-ds-fvg'

const Block = styled.div`
  display: block;
  width: 100%;
`;

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <Block>
      <Heading size="xl">{t('welcome message')}</Heading>
      <TextBody color="neutral" as="span">{t('tool usage')}</TextBody>
    </Block>
  );
};

  export default Welcome;
