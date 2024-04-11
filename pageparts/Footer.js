import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Search from "../components/search";
import Toolbar from "@mui/material/Toolbar";


const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <CssBaseline />
      <Container component="main" >
      </Container>
      <Toolbar
      disableGutters
        sx={{
          px: 2,
          py: 3,
          backgroundColor: "#87cefa"
        }}
      >
        <Container justifycontent
        >
          <Typography variant="body1">
            Nakazuba
          </Typography>
          <Copyright />
          </Container>
          <div className='search'>
            <Search />
          </div>
      </Toolbar>
    </ThemeProvider>
  );
}


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {' © '}
      {new Date().getFullYear()}
      {'  '}
      <Link sx={{ fontWeight: "bold" }} color="inherit" href="https://ja.wikipedia.org/wiki/%E3%81%9F%E3%82%89%E3%81%93" style={{ textDecoration: 'none' }}>
        F4SANT
      </Link>{'  '}
      All Rights Reserved.
    </Typography>
  );
}