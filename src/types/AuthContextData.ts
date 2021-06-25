import { User } from './User';

export type AuthContextData = {
  user?: User;
  signInWithGoogle: () => Promise<void>;
};
