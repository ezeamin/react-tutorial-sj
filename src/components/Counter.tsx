import { useEffect, useState } from 'react';

const countLS = Number(localStorage.getItem('count')) || 0;

const Counter = () => {
  const [count, setCount] = useState(countLS);

  useEffect(() => {
    localStorage.setItem('count', '' + count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  // 1. SIEMPRE corre en el primer renderizado ("monta")
  // 2. Corre cada vez que una de sus deps se actualiza
  // 3. Si ponemos un arreglo de deps vacio, significa que solo se ejecuta al montarse (es decir, 1 vez)
  // 4. Si queremos correr codigo cuando el componente se DESMONTA, se usa el return
  // 5. PUEDE GENERAR LOOPS INFINITOS

  // accion -> reaccion (efecto)
  // se actualiza count -> console.log()

  // useEffect -> efectos
  // useRef -> Seleccionar elementos del DOM (~ document.getElementById())

  return (
    <section className='flex flex-col justify-center items-center gap-4 mt-10'>
      <button
        onClick={handleClick}
        className='bg-gray-400 px-5 py-2 rounded-xl text-white'
      >
        Agregar +
      </button>
      <h3>{count}</h3>
    </section>
  );
};
export default Counter;
