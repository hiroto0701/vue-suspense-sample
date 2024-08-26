import type { UsersResponse } from '../types/user';

export const useFetchUsers = () => {
  async function fetchUsersList(): Promise<UsersResponse> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  }

  return { fetchUsersList };
};