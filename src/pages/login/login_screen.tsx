import { Box, TextField, Typography, Paper, Button } from "@mui/material";
import styles from "./styles";
import { Lock } from "@mui/icons-material";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginClickAction } from "../../store/modules/login/actions";
import { IUserLogin } from "../../store/modules/login/types";
type Props = {};

function LoginScreen({}: Props) {
  const [windowWidth, _] = React.useState(window.innerWidth > 1032);
  const dispatch = useDispatch();
  const responsiveDisplay = windowWidth
    ? styles.container
    : {
        ...styles.container,
        flexDirection: "column",
        alignItems: "center",
      };

  const responsiveWellcome = windowWidth
    ? styles.wellcomeFont
    : {
        ...styles.wellcomeFont,
        fontSize: 30,
      };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    const dataFinal = data as IUserLogin;
    dispatch(loginClickAction(dataFinal));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img style={styles.positionIcon} src="/public/vite.svg" />
      <Box sx={responsiveDisplay}>
        <Box>
          <Typography sx={responsiveWellcome} variant="body1">
            Olá Novamente
          </Typography>
        </Box>
        <Paper sx={styles.inputsContainer}>
          <Typography sx={styles.title} variant="subtitle2" gutterBottom>
            Faça Login:
          </Typography>
          <TextField
            label="Usuario"
            sx={styles.inputs}
            {...register("user")}
            required
          />
          <TextField
            label="Senha"
            sx={styles.inputs}
            {...register("password")}
            required
          />
          <Button
            type="submit"
            startIcon={<Lock />}
            sx={styles.buttonLogin}
            variant="contained"
          >
            Logar
          </Button>
        </Paper>
      </Box>
    </form>
  );
}

export default LoginScreen;
