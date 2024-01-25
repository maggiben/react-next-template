import styled from "styled-components";
import { 
  Grid, 
  GridItem, 
  Heading, 
  Label,
  TextBody,
  AlertIcon,
  CheckIcon
} from '@fravega-it/bumeran-ds-fvg'
import { useTranslation } from 'react-i18next';
import { Person } from 'types/type';


const Card = styled.div`
  width: 100%;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpaceRight = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-right: ${({ theme, size }) => theme.spacing[size]};
`;

const SpaceTop = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-top: ${({ theme, size }) => theme.spacing[size]};
`;

const StatusIcon = (type: Boolean) => type ? <CheckIcon /> : <AlertIcon />;

type ClientCardLayoutProps = {
  person: Person;
}

const ValidationList = (props: ClientCardLayoutProps) => {
  const { t } = useTranslation();
  const { person } = props;
  const validationLayout = {
    email: {
      icon: StatusIcon(person.validations.email),
      color: person.validations.email ? 'green' : 'red' as 'red' | 'green',
      label: person.validations.email ? t('validated email') : t('not validated email'),
      description: person.validations.email ? t('validated email description') : t('not validated email description')
    },
    renaper: {
      icon: StatusIcon(person.validations.renaper),
      color: person.validations.renaper ? 'green' : 'red' as 'red' | 'green',
      label: person.validations.renaper ? t('validated renaper') : t('not validated renaper'),
      description: person.validations.renaper ? t('validated renaper description') : t('not validated renaper description')
    },
    facephi: {
      icon: StatusIcon(person.validations.facephi),
      color: person.validations.facephi ? 'green' : 'red' as 'red' | 'green',
      label: person.validations.facephi ? t('validated facephi') : t('not validated facephi'),
      description: person.validations.facephi ? t('validated facephi description') : t('not validated facephi description')
    }
  };

  return (
    <Card>
      {
        Object.entries(validationLayout).map(([validation, properties], index) => (
          <>
            <Grid spacing="s" rowSpacing="s">
              <GridItem xs={12} alignSelf="center" justifySelf="start" >
                <Centered>
                  <Label leftIcon={properties.icon} label={properties.label} color={properties.color}/>
                  <SpaceRight size="xs" />
                  <TextBody size="m" color="neutral">{properties.description}</TextBody>
                </Centered>
              </GridItem>
            </Grid>
            <SpaceTop size="xs" />
          </>
        ))
      }
      {/* <Grid spacing="s" rowSpacing="s">
        <GridItem xs={12} alignSelf="center" justifySelf="start" >
          <Centered>
            <Label leftIcon={<AlertIcon />} label={'pepe'} color={person.status?.color as 'red' | 'green'}/>
            <SpaceRight size="xs" />
            <TextBody size="m" color="neutral">{t('validated email description')}</TextBody>
          </Centered>
        </GridItem>
      </Grid>
      <SpaceTop size="xs" /> */}
    </Card>
  );

  // return (
  //   <Card>
  //     <Grid spacing="s" rowSpacing="s">
  //       <GridItem xs={12} alignSelf="center" justifySelf="start" >
  //         <Centered>
  //           <Label leftIcon={<AlertIcon />} label={} color={person.status?.color as 'red' | 'green'}/>
  //           <SpaceRight size="xs" />
  //           <TextBody size="m" color="neutral">{t('validated email description')}</TextBody>
  //         </Centered>
  //       </GridItem>
  //     </Grid>
  //     <SpaceTop size="xs" />
  //     <Grid spacing="s" rowSpacing="s">
  //       <GridItem xs={12} alignSelf="center" justifySelf="start">
  //         <Centered>
  //           <Label leftIcon={<CheckIcon />} label={t('validated renaper')} color={'green'}/>
  //           <SpaceRight size="xs" />
  //           <TextBody size="m" color="neutral">{t('validated renaper description')}</TextBody>
  //         </Centered>
  //       </GridItem>
  //     </Grid>
  //     <SpaceTop size="xs" />
  //     <Grid spacing="s" rowSpacing="s">
  //       <GridItem xs={12} alignSelf="center" justifySelf="start">
  //         <Centered>
  //           <Label leftIcon={<CheckIcon />} label={t('validated facephi')} color={'green'}/>
  //           <SpaceRight size="xs" />
  //           <TextBody size="m" color="neutral">{t('validated facephi description')}</TextBody>
  //         </Centered>
  //       </GridItem>
  //     </Grid>
  //   </Card>
  // );
};

  export default ValidationList;
