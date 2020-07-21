import React from 'react';
import {
  DefaultTheme,
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';

//TODO - make dark/light theme
const theme: DefaultTheme = {
  background: 'rgba(18,27,30)',
  borderRadius: '20px',
  colors: {
    main: 'rgba(50, 200, 50)',
    secondary: 'rgba(255, 243, 176,1)',
    text: 'rgba(21,27,31, 0.5)',
    contrastText: 'rgba(255,255,255,1)',
  },

  breakpoints: {
    screenSizes: {
      //Iphone 5 etc v.small devices
      xs: '320px',
      //Standard mobile, iPhone x,
      sm: '360px',
      //Tablets
      md: '768px',
      //Laptops, Desktops
      lg: '1200px',
    },
  },
  fontFamily: 'Hind Siliguri',
};

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body {
  background: ${theme.background};
  margin: 0;
  padding: 0;
  color: ${theme.colors.main};
  font-family: ${theme.fontFamily};
  font-size: 16px;
  overflow: auto;

}
body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: ${theme.colors.secondary};
}
body::-webkit-scrollbar-thumb {
  background: ${theme.colors.main};
}
`;

const AppTheme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
