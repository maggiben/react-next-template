import styled from "styled-components";
import { 
  UserIcon, 
  CheckCircleIcon, 
  CloseCircleIcon, 
  QuestionCircleIcon, 
  Grid, 
  GridItem, 
  Heading, 
  Label,
  IconButton,
  Button,
  EditIcon,
} from '@fravega-it/bumeran-ds-fvg'
import { useTranslation } from 'react-i18next';
import { Person } from 'types/type';
import { useMediaQuery } from "@hooks/useMediaQuery";
// import ClientTable from '@components/content/ClientTable/ClientTable';
import ValidationList from '../ValidationList/ValidationList';
import ClientData from '../ClientData/ClientData';


const Card = styled.div`
  position: relative;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.m};
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type ClientCardLayoutProps = {
  person: Person;
}

const SpaceRight = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-right: ${({ theme, size }) => theme.spacing[size]};
`;

const SpaceTop = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-top: ${({ theme, size }) => theme.spacing[size]};
`;

const ClientCardLayout = (props: ClientCardLayoutProps) => {
  const { t } = useTranslation();
  const { person } = props;
  const columns = useMediaQuery('(min-width: 768px)') ? 3 : 1;

  const data: Record<string, string>[] = [
    {[t('birth date')]: new Date(person.age).toLocaleDateString()}, 
    {[t('email')]: person.email.address}, 
    {[t('address')]: `${person.address.street} • ${person.address.number} • ${person.address.city}`}, 
    {[t('phone')]: `${person.phone.codeArea.toString()} - ${person.phone.number.toString()}`},
    {[t(person.identification.type)]: person.identification.number.toString()}, 
    {[t('id expiration date')]: new Date(person.identification.expiration).toLocaleDateString()}, 
  ];

  return (
    <Card>
      <Grid>
        <GridItem xs={6} justifySelf="start" alignSelf="center">
          <Centered>
            <Heading size="s">{person.name} {person.lastname}</Heading><SpaceRight size="s" /><Label label={person.status?.label} color={person.status?.color as 'red' | 'green'}/>
          </Centered>
        </GridItem>
        <GridItem xs={6} alignSelf="center" justifySelf="end">
          <Button label={t('resend email')} variant="primary" size="s" onClick={() => alert('hola')}/>
        </GridItem>
        <GridItem xs={12}>
          <ValidationList person={person} />
          <SpaceTop size="s" />
          <ClientData data={data} columns={columns}/>
        </GridItem>
      </Grid>
    </Card>
  )
};

  export default ClientCardLayout;
