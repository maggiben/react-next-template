import { useEffect, useState } from 'react';
import { ButtonGroup, Grid, GridItem } from "@fravega-it/bumeran-ds-fvg";
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import getConfig from "next/config";
import { useRouter } from 'next/router';

import TextInputComponent from './formComponents/TextInputComponent';
import SelectComponent from './formComponents/SelectComponent';

export type FormValues = {
  cuid?: string;
  documentType?: string;
  documentNumber?: number;
  email?: string;
}
  
const schema = yup
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

type FilterFormProps = {
  onSearch: (data: FormValues) => void;
  documentType?: string;
  documentNumber?: number;
  cuid?: number;
  email?: string;
}
  
const FilterForm = (props: FilterFormProps): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation();
  const { onSearch } = props;
  const config = getConfig();
  const { handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
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
    <form onKeyDown={handleKeyDown} onSubmit={handleSubmit(onSearch ?? onSubmit)}>
      <Grid>
        <GridItem xs={4}>
          <TextInputComponent
            id="cuid"
            label="CUID"
            defaultValue={props.cuid?.toString()}
            error={errors.cuid?.message}
            control={control}
          />
        </GridItem>
        <GridItem xs={4}>
          <SelectComponent 
            control={control}
            id="documentType"
            label="Tipo de documento"
            options={[
              { id: 'dni', label: 'DNI' },
              { id: 'lc', label: 'Libreta Cívica' },
              { id: 'le', label: 'Libreta de Enrolamiento' },
              { id: 'cuit', label: 'CUIT' },
              { id: 'cuil', label: 'CUIL' },
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
        <GridItem xs={4}>
        <TextInputComponent
            control={control}
            id="email"
            defaultValue={props.email}
            label="Email"
            error={errors.email?.message}
          />
        </GridItem>
        <GridItem xs={3} alignSelf="center" justifySelf="center">
          {errors.all && <div>Errors: {errors.all.message}</div>}
          
        </GridItem>
        <GridItem xs={5} alignSelf="end" justifySelf="end">
          <ButtonGroup
            primaryLabel={t('search')}
            secondaryLabel={t('reset')}
            onClickPrimary={handleSubmit(onSearch ?? onSubmit)}
            onClickSecondary={reset}
          />
        </GridItem>
      </Grid>
    </form>
  );
};

export default FilterForm;
