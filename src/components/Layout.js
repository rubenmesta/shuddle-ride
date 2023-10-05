import React, { useState } from 'react';
import { Navbar, Footer } from 'odyssey-design-system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors } from '../utils/colors';
import * as data from '../data';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Logo from './Logo';
const theme = createTheme();

const Layout = ({ children }) => {
  const { navItems, col1, col2, col3, social } = data;

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar
          logo={<Logo width={70} />}
          background={'#5C0007'}
          itemsColor={colors.primary[100]}
          items={navItems.map((i) => {
            return <a>{i}</a>;
          })}
          mobileMenuColor={colors.white[500]}
          withLogIn
          variant="outlineWhite"
          buttonLabel="Log In"
        />
        {children}
        <Footer
          title={'Explore the Cosmos'}
          col1={col1}
          col2={col2}
          col3={col3}
          social={social}
          avatar={'/img/rail.svg'}
          buttonVariant={'outlineWhite'}
          background={'#5C0007'}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default Layout;
