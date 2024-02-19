import styled from "styled-components";
import DataContainer from '@components/DataContainer/DataContainer';
import * as string from '@utils/string';
import { useTranslation } from 'react-i18next';
import verified from '@components/Verified/Verified'
import { Phone } from 'types/type';


const Centered = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CenteredRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const CenteredColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SpaceTop = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-top: ${({ theme, size }) => theme.spacing[size]};
`;

interface ILegajoPhonesBodyProp {
  phone: Phone;
}

const LegajoPhonesBody = ({phone}: ILegajoPhonesBodyProp): JSX.Element => {
  const { t } = useTranslation();

  const emailsData: Record<string, string | JSX.Element>[] = [
    {'Código de Área': phone.areaCode},
    {'Número': phone.number},
    {'Verificado': verified(phone.stateVerified)}
  ]
  return (
    <Centered>
      <CenteredColumn data-testid="legajo-phone-body">
        <DataContainer data={emailsData} columns={2} withBorder={false} background='transparent'/>
      </CenteredColumn>
    </Centered>
  );
};

export default LegajoPhonesBody;
