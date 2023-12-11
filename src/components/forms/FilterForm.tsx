import { useEffect, useState } from 'react';
import { ButtonGroup, Select, Grid, GridItem, NumberInput } from "@fravega-it/bumeran-ds-fvg";
import { TextInput } from '@fravega-it/bumeran-ds-fvg'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import * as yup from 'yup';
import getConfig from "next/config";


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
  })
  // .required();

const FilterForm = ({ onSearch }: { onSearch: (data: FormValues) => void}): JSX.Element => {
  const config = getConfig();
  useEffect(() => {
    // eslint-disable-next-line no-console
    api.get('/searchResults.json').then((result) => console.log('result', result));
  }, []);

  const { handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  
  // eslint-disable-next-line no-console
  console.log('error', errors);
  // eslint-disable-next-line no-console
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form>
      <Grid>
        <GridItem xs={4}>
          <Controller
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextInput
                id="cuid"
                label="CUID"
                placeholder="CUID"
                errorMessage="caca"
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched/blur
              />
            )}
            name="cuid"
            control={control}
            
          />
          
        </GridItem>
        <GridItem xs={4}>
            {/* <Select
              id="select-example"
              options={[
                { id: '1', label: 'dni' },
                { id: '2', label: 'libreta civica' },
                { id: '3', label: 'opción 3' },
              ]}
              value={optionSelected}
              onChange={(option: { id: string; label: string }) =>
                setOptionSelected(option.id)
              }
              placeholder="Tipo de documento"
              label="Tipo de documento"
            /> */}
            <Controller
              control={control}
              name="documentType"
              defaultValue={'dni'}
              render={({ field: { onChange, onBlur, value, ref } }) => {
                // eslint-disable-next-line no-console
                console.log('onChange', value);
                return (
                  <Select
                    id="documentType"
                    options={[
                      { id: 'dni', label: 'DNI' },
                      { id: 'lc', label: 'Libreta Civica' },
                      { id: 'le', label: 'Libreta de Enrolamiento' },
                      { id: 'le', label: 'CUIT' },
                      { id: 'le', label: 'CUIL' },
                    ]}
                    value={'dni'}
                    placeholder="Tipo de documento"
                    label="Tipo de documento"
                    onChange={({id}) => onChange(id)}
                    onBlur={onBlur} // notify when input is touched/blur
                  />
                )
              }}
            />
        </GridItem>
        <GridItem xs={4}>
          <Controller
            control={control}
            name="documentNumber"
            render={({ field: { onChange, onBlur } }) => {
              return (
                <NumberInput
                  id="documentNumber"
                  label="Número"
                  errorMessage="caca"
                  onChange={onChange} // send value to hook form
                  onBlur={onBlur} // notify when input is touched/blur
                />
              )}
            }
          />
        </GridItem>
        <GridItem xs={4}>
          <Controller
            render={({ field: { onChange, onBlur } }) => (
              <TextInput
                id="email"
                label="Email"
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched/blur
              />
            )}
            name="email"
            control={control}
            
          />
        </GridItem>
        <GridItem xs={8} alignSelf="end" justifySelf="end">
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