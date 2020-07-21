export interface IUser {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: any;
}
