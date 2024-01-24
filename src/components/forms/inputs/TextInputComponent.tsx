import { TextInput } from '@fravega-it/bumeran-ds-fvg'
import { Controller, Control, FieldValues } from 'react-hook-form';

type TextInputComponentProps = {
  defaultValue?: string;
  name?: string;
  error?: string;
  id: string;
  label: string;
  control?: Control<FieldValues> | undefined;
  disabled?: boolean;
}
  
const TextInputComponent = (props: TextInputComponentProps): JSX.Element => {
  const { defaultValue, name, error, id, label, control, disabled = false } = props;
  return (
    <Controller
      name={name ?? id}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur } }) => (
          <TextInput
            id={id}
            label={label}
            defaultValue={defaultValue}
            error={Boolean(error?.length)}
            errorMessage={error}
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched/blur
            disabled={disabled}
          />
      )}
      />
  );
}

export default TextInputComponent;