import styled from "styled-components";
import { 
  Grid, 
  GridItem, 
  Heading, 
  Label,
  Button,
  MailIcon,
  CheckIcon,
  AlertIcon,
} from '@fravega-it/bumeran-ds-fvg'
import { useTranslation } from 'react-i18next';
import { Person } from 'types/type';
import { useMediaQuery } from 'usehooks-ts';
import DataContainer from '@components/DataContainer/DataContainer';
import ValidationList from '../ValidationList/ValidationList';
import { SpaceRight, SpaceTop } from '@components/Spacing/Spacing';
import * as localization from '@utils/localization';

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
    {[t('birth date')]: localization.toLocaleDateString(person.age)}, 
    {[t('email')]: person.email.address}, 
    {[t('address')]: `${person.address.street} • ${person.address.number} • ${person.address.city}`}, 
    {[t('phone')]: `${person.phone.codeArea.toString()} - ${person.phone.number.toString()}`},
    {[t(person.identification.type)]: person.identification.number.toString()}, 
    {[t('id expiration date')]: localization.toLocaleDateString(person.identification.expiration)}, 
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

  const icons = {
    onboardingfull: <CheckIcon />,
    onboardingincompleto: <AlertIcon />,
    dnicaduco: <AlertIcon />,
  };

  return (
    <Container>
      <Grid>
        <GridItem xs={6} justifySelf="start" alignSelf="center">
          <Centered>
            <Heading size="s">{person.name} {person.lastname}</Heading><SpaceRight size="s" /><Label leftIcon={icons[person.status]} label={labels[person.status]} color={colors[person.status] ? 'green' : 'red'}/>
          </Centered>
        </GridItem>
        {
          !person.validations.email &&
            <GridItem xs={6} alignSelf="center" justifySelf="end">
              <Button label={t('resend email')} rightIcon={<MailIcon />} variant="primary" size="s"/>
            </GridItem>
        }
        <GridItem xs={12}>
          <ValidationList person={person} />
          <SpaceTop size="s" />
          <DataContainer data={clientData} columns={columns} withBorder={true} />
        </GridItem>
      </Grid>
    </Container>
  )
};

  export default ClientCardLayout;
