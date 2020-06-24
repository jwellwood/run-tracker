import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '20px',
  colors: {
    main: 'pink',
    secondary: 'blue',
    text: 'rgba(21,27,31, 0.5)',
    contrastText: 'rgba(255,255,255,1)',
  },
  fontFamily: 'Hind Siliguri',
};

console.log(theme);

const AppTheme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppTheme;
