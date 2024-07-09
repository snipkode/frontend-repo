'use client'; 
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { ReactNode } from 'react';

interface CustomThemeProviderProps {
    children: ReactNode
}

const CustomThemeProvider = ({ children } : CustomThemeProviderProps ) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
