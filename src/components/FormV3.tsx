import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const personSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'El nombre debe ser un texto',
    })
    .min(2, {
      message: 'El nombre debe tener al menos 2 caracteres',
    })
    .max(30, {
      message: 'El nombre debe tener como mucho 30 caracteres',
    })
    .default(''),
  lastname: z
    .string({
      invalid_type_error: 'El apellido debe ser un texto',
    })
    .min(2, {
      message: 'El apellido debe tener al menos 2 caracteres',
    })
    .max(30, {
      message: 'El apellido debe tener como mucho 30 caracteres',
    })
    .default(''),
  phone: z
    .string({
      invalid_type_error: 'El teléfono debe ser un texto',
    })
    .regex(/\d{1,8}/, {
      message: 'El teléfono debe contener solo valores numéricos',
    })
    .min(2, {
      message: 'El teléfono debe tener al menos 2 caracteres',
    })
    .max(8, {
      message: 'El teléfono debe tener como mucho 30 caracteres',
    })
    .default(''),
});

type PersonSchema = z.infer<typeof personSchema>;

const FormV3 = () => {
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm<PersonSchema>({
    resolver: zodResolver(personSchema),
  });

  // Esto se ejecuta SOLO cuando ya está todo validado y correcto
  const handleSubmit = (data: PersonSchema) => {
    console.log('handleSubmit', data);
  };

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <fieldset className='flex gap-2 items-center mb-2'>
        <label htmlFor=''>Nombre</label>
        <input
          type='text'
          className='rounded-md px-2 py-1'
          {...register('name')}
        />
        {errors.name && <p className='text-sm'>{errors.name.message}</p>}
      </fieldset>
      <fieldset className='flex gap-2 items-center mb-2'>
        <label htmlFor=''>Apellido</label>
        <input
          type='text'
          className='rounded-md px-2 py-1'
          {...register('lastname')}
        />
        {errors.lastname && (
          <p className='text-sm'>{errors.lastname.message}</p>
        )}
      </fieldset>
      <fieldset className='flex gap-2 items-center mb-2'>
        <label htmlFor=''>Teléfono</label>
        <input
          type='text'
          className='rounded-md px-2 py-1'
          {...register('phone')}
        />
        {errors.phone && <p className='text-sm'>{errors.phone.message}</p>}
      </fieldset>
      <button
        className='px-3 py-2 bg-red-500 text-white rounded-md'
        type='submit'
      >
        Guardar
      </button>
    </form>
  );
};
export default FormV3;
