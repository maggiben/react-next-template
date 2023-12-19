import { useEffect, useState } from 'react';
import { ButtonGroup, Select, Grid, GridItem, NumberInput } from "@fravega-it/bumeran-ds-fvg";
import { TextInput } from '@fravega-it/bumeran-ds-fvg'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import * as yup from 'yup';
import getConfig from "next/config";
import { useRouter } from 'next/router';

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
  const { onSearch } = props;
  const config = getConfig();
  const { handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
      handleSubmit(onSearch ?? onSubmit)();
    }
  };
  
  // eslint-disable-next-line no-console
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onKeyDown={handleKeyDown}>
      <Grid>
        <GridItem xs={4}>
          <Controller
            defaultValue={props.cuid?.toString()}
            render={({ field: { onChange, onBlur } }) => (
              <TextInput
                id="cuid"
                label="CUID"
                defaultValue={props.cuid?.toString()}
                errorMessage={errors.cuid?.message}
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched/blur
              />
            )}
            name="cuid"
            control={control}
          />
        </GridItem>
        <GridItem xs={4}>
          {/* <Controller
            control={control}
            name="documentType"
            defaultValue={props.documentType ?? 'dni'}
            render={({ field: { onChange, onBlur, value, ref } }) => {
              return (
                <Select
                  id="documentType"
                  label="Tipo de documento"
                  options={[
                    { id: 'dni', label: 'DNI' },
                    { id: 'lc', label: 'Libreta Cívica' },
                    { id: 'le', label: 'Libreta de Enrolamiento' },
                    { id: 'cuit', label: 'CUIT' },
                    { id: 'cuil', label: 'CUIL' },
                  ]}
                  value={props.documentType ?? 'dni'}
                  placeholder="Tipo de documento"
                  errorMessage={errors.documentType?.message}
                  onChange={({id}) => onChange(id)}
                  onBlur={onBlur} // notify when input is touched/blur
                />
              )
            }}
          /> */}
          <SelectComponent 
            control={control}
            name="documentType"
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
          <Controller
            control={control}
            name="documentNumber"
            defaultValue={props.documentNumber}
            render={({ field: { onChange, onBlur } }) => {
              return (
                <TextInput
                  id="documentNumber"
                  label="Número"
                  defaultValue={props.documentNumber?.toString()}
                  error={Boolean(errors.documentNumber)}
                  errorMessage={errors.documentNumber?.message}
                  onChange={onChange} // send value to hook form
                  onBlur={onBlur} // notify when input is touched/blur
                />
              )}
            }
          />
        </GridItem>
        <GridItem xs={4}>
          <Controller
            defaultValue={props.email}
            render={({ field: { onChange, onBlur } }) => (
              <TextInput
                id="email"
                label="Email"
                defaultValue={props.email}
                errorMessage={errors.email?.message}
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched/blur
              />
            )}
            name="email"
            control={control}
            
          />
        </GridItem>
        <GridItem xs={3} alignSelf="center" justifySelf="center">
          {errors.all && <div>Errors: {errors.all.message}</div>}
          
        </GridItem>
        <GridItem xs={5} alignSelf="end" justifySelf="end">
          <ButtonGroup
            primaryLabel="Buscar"
            secondaryLabel="Reset"
            onClickPrimary={handleSubmit(onSearch ?? onSubmit)}
            onClickSecondary={reset}
          />
        </GridItem>
      </Grid>
    </form>
  );
};

export default FilterForm;
