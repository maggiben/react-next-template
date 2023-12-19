import { TextInput } from '@fravega-it/bumeran-ds-fvg'
import { Controller, Control, FieldValues } from 'react-hook-form';

type TextInputComponentProps = {
  defaultValue?: string;
  error?: string;
  id: string;
  label: string;
  control?: Control<FieldValues> | undefined;
}
  
const TextInputComponent = (props: TextInputComponentProps): JSX.Element => {
  const { defaultValue, error, id, label, control } = props;
  return (
    <Controller
      name={id}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur } }) => (
          <TextInput
            id={id}
            label={label}
            defaultValue={defaultValue}
            errorMessage={error}
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched/blur
          />
      )}
      />
  );
}

export default TextInputComponent;