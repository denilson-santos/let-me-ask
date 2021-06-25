import { useContext } from 'react';

import { AuthContext } from '../ contexts/AuthContext';
import { AuthContextData } from '../types/AuthContextData';

export function useAuth(): AuthContextData {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error('Context auth not found.');
  }

  return value;
}
