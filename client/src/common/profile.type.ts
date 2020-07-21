export interface IProfile {
  location: string;
  hasDarkTheme: boolean;
  hasMetric: boolean;
}

export interface IProfileState {
  profile: any;
  loading: boolean;
  error: any;
}
