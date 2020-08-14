export interface IUser {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: any;
}

export interface IUserDetails {
  _id: string;
  username: string;
  email: string;
}
