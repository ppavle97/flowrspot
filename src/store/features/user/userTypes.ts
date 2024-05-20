export interface User {
  email: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
