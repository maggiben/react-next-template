import { Button, Grid, GridItem, Link } from "@fravega-it/bumeran-ds-fvg";
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from "styled-components";
import TextInputComponent from '../inputs/TextInputComponent';
import SelectComponent from '../inputs/SelectComponent';

const FormContainer = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const SpaceTop = styled.div<{ size: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'; }>`
  margin-top: ${({ theme, size }) => theme.spacing[size]};
`;

export type FormValues = {
  cuid?: string;
  documentType?: string;
  documentNumber?: number;
  email?: string;
}
  
const searchSchema = yup
  .object()
  .shape({
    cuid: yup.string(),
    documentType: yup.string(),
    documentNumber: yup.number(),
    email: yup.string().email(),
    all: yup.string(),
  })
  .test((options, ...rest) => {
    const { createError } = rest[0];
    return Object.keys(options).length <= 1 ? createError({path: 'all', message: 'Seleccione al menos una opción', params: options, type: 'global'}) : true;
  })
  .required();

type SearchFormProps = {
  onSearch: (data: FormValues) => void;
  documentType?: string;
  documentNumber?: number;
  cuid?: number;
  email?: string;
}
  
const SearchForm = (props: SearchFormProps): JSX.Element => {
  const { t } = useTranslation();
  const { onSearch } = props;
  const { handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(searchSchema),
  });
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
      return handleSubmit(onSearch ?? onSubmit);
    }
  };
  
  // eslint-disable-next-line no-console
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <FormContainer>
      <form onKeyDown={handleKeyDown} onSubmit={handleSubmit(onSearch ?? onSubmit)} style={{ width: '100%'}}>
        <Grid>
          <GridItem xs={4}>
            <SelectComponent 
              control={control}
              id="documentType"
              label="Buscar por..."
              options={[
                { id: 'dni', label: 'DNI' },
                { id: 'email', label: 'Email' },
              ]}
              defaultValue={props.documentType ?? 'dni'}
              error={errors.documentType?.message}
            />
          </GridItem>
          <GridItem xs={4}>
            <TextInputComponent
              control={control}
              id="documentNumber"
              defaultValue={props.documentNumber?.toString()}
              label="Número"
              error={errors.documentNumber?.message}
            />
          </GridItem>
          
          <GridItem xs={4} alignSelf="end" justifySelf="start">
            <Button 
              label={t('search')} 
              variant="primary"
              onClick={handleSubmit(onSearch ?? onSubmit)}
            />
          </GridItem>
        </Grid>
        <SpaceTop size="s" />
        <Grid>
          <GridItem xs={4} alignSelf="end" justifySelf="start">
            <Link>
              <a onClick={() => alert('hola')}>{t('clan filters')}</a>
            </Link>
          </GridItem>
          <GridItem xs={3} alignSelf="center" justifySelf="center">
            {errors.all && <div>Errors: {errors.all.message}</div>}
          </GridItem>
        </Grid>
      </form>
    </FormContainer>
  );
};

export default SearchForm;
