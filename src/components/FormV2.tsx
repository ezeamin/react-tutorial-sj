import { ChangeEvent, FormEvent, useState } from 'react';

// Componente controlado
const FormV2 = () => {
  const [name, setName] = useState('');
  const [lastname, setlastname] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const type = e.target.name;
    const newValue = e.target.value;

    if (type === 'name') setName(newValue);
    else if (type === 'lastname') setlastname(newValue);
    else setPhone(newValue);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className='flex gap-2 items-center mb-2'>
        <label htmlFor=''>Nombre</label>
        <input
          value={name}
          name='name'
          type='text'
          className='rounded-md px-2 py-1'
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className='flex gap-2 items-center mb-2'>
        <label htmlFor=''>Apellido</label>
        <input
          value={lastname}
          name='lastname'
          type='text'
          className='rounded-md px-2 py-1'
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className='flex gap-2 items-center mb-2'>
        <label htmlFor=''>Teléfono</label>
        <input
          value={phone}
          name='phone'
          type='text'
          className='rounded-md px-2 py-1'
          onChange={handleChange}
        />
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
export default FormV2;
