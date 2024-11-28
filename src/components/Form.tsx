import { FormEvent, useRef } from 'react';

const Form = () => {
  const $name = useRef<HTMLInputElement>(null);
  const $lastname = useRef<HTMLInputElement>(null);
  const $phone = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if ($name.current && $lastname.current && $phone.current) {
      console.log($name.current.value);
      console.log($lastname.current.value);
      console.log($phone.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='flex gap-2 items-center mb-2'>
        <label htmlFor=''>Nombre</label>
        <input ref={$name} type='text' className='rounded-md px-2 py-1 ' />
      </fieldset>
      <fieldset className='flex gap-2 items-center mb-2'>
        <label htmlFor=''>Apellido</label>
        <input ref={$lastname} type='text' className='rounded-md px-2 py-1 ' />
      </fieldset>
      <fieldset className='flex gap-2 items-center mb-2'>
        <label htmlFor=''>Teléfono</label>
        <input ref={$phone} type='text' className='rounded-md px-2 py-1 ' />
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
export default Form;
