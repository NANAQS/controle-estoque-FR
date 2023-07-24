// src/components/AppBarWithOptions.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, ThemeProvider, createTheme, Box } from '@mui/material';
import { Group } from '@mui/icons-material';



const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          marginBottom: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: 8,
        },
      },
    },
  },
});

interface IMenu {

}

interface IProps {
}

const AppBarWithOptions: React.FC<IProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            MyApp
          </Typography>
          <Button color="inherit">Opção 1</Button>
          <Button color="inherit">Opção 2</Button>
          <Button color="inherit">Opção 3</Button>
        </Toolbar>
        <Toolbar>
          <Button color="inherit">
            <Group sx={{ marginRight: 1 }} />
            Agenda
          </Button>
          <Button color="inherit">
            <Group sx={{ marginRight: 1 }} />
            Financeiro
          </Button>
          <Button color="inherit">
            <Group sx={{ marginRight: 1 }} />
            Estoque
          </Button>
          <Button color="inherit">
            <Group sx={{ marginRight: 1 }} />
            Clientes
          </Button>
          <Button color="inherit">
            <Group sx={{ marginRight: 1 }} />
            Relatorios
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default AppBarWithOptions;
