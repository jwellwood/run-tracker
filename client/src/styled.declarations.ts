import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    background: string;
    colors: {
      main: string;
      secondary: string;
      text: string;
      contrastText: string;
    };
    breakpoints: {
      screenSizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
      };
    };
    fontFamily: string;
  }
}
