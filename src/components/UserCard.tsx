import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { User } from '../types/User';
import { useState } from 'react';

const deleteUserFn = async (userId: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      method: 'DELETE',
    }
  );

  return response;
};

type Props = {
  user: User;
};

const UserCard = (props: Props) => {
  const { user } = props;

  const [isLoading, setIsLoading] = useState(false);

  const queryClient = useQueryClient();

  const { mutate: deleteUser } = useMutation({
    mutationFn: deleteUserFn,
    onError: (e) => {
      alert(`Error al eliminar usuario: ${e.message}`);
      setIsLoading(false);
    },
    onSuccess: () => {
      alert(`Usuario ${user.name} eliminado`);
      setIsLoading(false);
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },

    // AbortController
  });

  const handleDelete = () => {
    setIsLoading(true);
    console.log(`Eliminando ${user.id}`);
    deleteUser(user.id);
  };

  if (isLoading) {
    return (
      <li className='card bg-gray-300 flex items-center justify-center'>
        <p>Eliminando...</p>
      </li>
    );
  }

  return (
    <li className='card'>
      <h2 className='text-xl font-bold'>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <div className='text-right'>
        <button
          className='mt-1 bg-red-500 text-white rounded-lg px-3 py-1'
          type='button'
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};
export default UserCard;
