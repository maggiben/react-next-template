import styled from "styled-components";
import DataContainer from '@components/DataContainer/DataContainer';
import { useTranslation } from 'react-i18next';
import { Email } from 'types/type';
import verified from '@components/Verified/Verified'

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

interface ILegajoEmailBodyProp {
  email: Email;
}

const LegajoEmailBody = ({email}: ILegajoEmailBodyProp): JSX.Element => {
  const { t } = useTranslation();
  const emailsData: Record<string, string | JSX.Element>[] = [
    {[t('email')]: email.email},
    {[t('verified')]: verified(email.stateVerified)},
  ]
  return (
    <Centered>
      <CenteredColumn data-testid="legajo-email-body">
        <DataContainer data={emailsData} columns={2} withBorder={false} background='transparent'/>
      </CenteredColumn>
    </Centered>
  );
};

export default LegajoEmailBody;
