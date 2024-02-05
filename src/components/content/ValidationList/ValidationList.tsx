import styled from "styled-components";
import { 
  Grid, 
  GridItem, 
  Label,
  TextBody,
  AlertIcon,
  CheckIcon
} from '@fravega-it/bumeran-ds-fvg'
import { useTranslation } from 'react-i18next';
import { Person } from 'types/type';
import { SpaceRight, SpaceTop } from "../../Spacing/Spacing";

const Card = styled.div`
  width: 100%;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
          <div key={index}>
            <Grid spacing="s" rowSpacing="s">
              <GridItem xs={12} alignSelf="center" justifySelf="start" >
                <Centered>
                  <Label leftIcon={properties.icon} label={properties.label} color={properties.color}/>
                  <SpaceRight size="xs" />
                  <TextBody size="m" color="neutral" as="span">{properties.description}</TextBody>
                </Centered>
              </GridItem>
            </Grid>
            <SpaceTop size="xs" />
          </div>
        ))
      }
    </Card>
  );
};

  export default ValidationList;
