import { TextInput, Button } from '@fravega-it/bumeran-ds-fvg';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormValues = {
  name: string
}

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
  })
  .required();

const ClientForm = (): JSX.Element => {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  // const onSubmit = (data) => console.log(data)

  return (
    <form>
      {/* <Controller
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <TextInput
            id="name"
            placeholder="First name"
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched/blur
          />
        )}
        name="name"
        control={control}
        
      /> */}
      { /* <TextInput id="name" label="name" {...register('name')} /> */}
      {/* <Button label="submit" size="s" variant="primary" onClick={handleSubmit(onSubmit)} /> */}
      {/* <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Tertiary" variant="tertiary" />
      <Button label="Danger" variant="danger" /> */}
    </form>
  );
};

export default ClientForm;
