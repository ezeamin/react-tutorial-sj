import { useQuery } from '@tanstack/react-query';
import UserCard from './UserCard';
import type { User } from '../types/User';

const fetchUsers = async ({ signal }: { signal: AbortSignal }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    signal,
  });
  const data = await response.json();

  return data;
};

const Users = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (isError) {
    return (
      <>
        <h1>Ocurrió un error</h1>
        <p>Error: {error.message}</p>
      </>
    );
  }

  return (
    <ul>
      {data.map((user: User) => (
        <UserCard user={user} key={user.id} />
      ))}
    </ul>
  );
};
export default Users;
