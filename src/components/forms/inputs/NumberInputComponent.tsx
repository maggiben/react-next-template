import { NumberInput } from '@fravega-it/bumeran-ds-fvg'
import { Controller, Control, FieldValues } from 'react-hook-form';

type TextInputComponentProps = {
  defaultValue?: number;
  name?: string;
  disabled?: boolean,
  min?: number;
  max?: number;
  error?: string;
  id: string;
  label: string;
  control?: Control<FieldValues> | undefined;
}
  
const TextInputComponent = (props: TextInputComponentProps): JSX.Element => {
  const { defaultValue, name, error, id, label, control, min, max, disabled = false } = props;
  return (
    <Controller
      name={name ?? id}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur } }) => (
          <NumberInput
            id={id}
            label={label}
            name={name ?? id}
            defaultValue={defaultValue}
            error={Boolean(error?.length)}
            errorMessage={error}
            min={min}
            max={max}
            disabled={disabled}
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched/blur
          />
      )}
      />
  );
}

export default TextInputComponent;