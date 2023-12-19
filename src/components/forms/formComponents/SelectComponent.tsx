import { Select } from '@fravega-it/bumeran-ds-fvg'
import { Controller, Control, FieldValues } from 'react-hook-form';

type Options = {
  id: string;
  label: string;
}

interface SelectComponentProps {
  defaultValue?: string;
  error?: string;
  id: string;
  name?: string;
  label: string;
  control?: Control<FieldValues> | undefined;
  options: Options[];
}
  
const SelectComponent = (props: SelectComponentProps): JSX.Element => {
  const { defaultValue, error, id, name, label, control, options } = props;
  return (
    <Controller
      control={control}
      name={name ?? id}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <Select
            id={id}
            label={label}
            options={options}
            value={defaultValue}
            errorMessage={error}
            onChange={({id}) => onChange(id)}
            onBlur={onBlur} // notify when input is touched/blur
          />
        )
      }}
    />
  );
}

export default SelectComponent;