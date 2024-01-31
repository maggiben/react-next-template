import styled from "styled-components";
import { 
  Grid, 
  GridItem, 
  Heading, 
  Label,
  Button,
} from '@fravega-it/bumeran-ds-fvg'
import { useTranslation } from 'react-i18next';
import { Person } from 'types/type';
import { useMediaQuery } from 'usehooks-ts';
import DataContainer from '@components/DataContainer/DataContainer';
import ValidationList from '../ValidationList/ValidationList';
import { SpaceRight, SpaceTop } from '@components/Spacing/Spacing';

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

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type ClientCardLayoutProps = {
  person: Person;
}

const ClientCardLayout = (props: ClientCardLayoutProps) => {
  const { t } = useTranslation();
  const { person } = props;
  const columns = useMediaQuery('(min-width: 768px)') ? 3 : 1;

  const clientData: Record<string, string>[] = [
    {[t('birth date')]: new Date(person.age).toLocaleDateString()}, 
    {[t('email')]: person.email.address}, 
    {[t('address')]: `${person.address.street} • ${person.address.number} • ${person.address.city}`}, 
    {[t('phone')]: `${person.phone.codeArea.toString()} - ${person.phone.number.toString()}`},
    {[t(person.identification.type)]: person.identification.number.toString()}, 
    {[t('id expiration date')]: new Date(person.identification.expiration).toLocaleDateString()}, 
  ];

  /* TODO: quick fix make batter */
  const colors = {
    onboardingfull: true,
    onboardingincompleto: false,
    dnicaduco: false,
  };

  const labels = {
    onboardingfull: t('onboarding full'),
    onboardingincompleto: t('onboarding incomplete'),
    dnicaduco: t('dni expired'),
  };

  return (
    <Card>
      <Grid>
        <GridItem xs={6} justifySelf="start" alignSelf="center">
          <Centered>
            <Heading size="s">{person.name} {person.lastname}</Heading><SpaceRight size="s" /><Label label={labels[person.status]} color={colors[person.status] ? 'green' : 'red'}/>
          </Centered>
        </GridItem>
        <GridItem xs={6} alignSelf="center" justifySelf="end">
          <Button label={t('resend email')} variant="primary" size="s" onClick={() => alert('hola')}/>
        </GridItem>
        <GridItem xs={12}>
          <ValidationList person={person} />
          <SpaceTop size="s" />
          <DataContainer data={clientData} columns={columns} />
        </GridItem>
      </Grid>
    </Card>
  )
};

  export default ClientCardLayout;
