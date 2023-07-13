import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import style from "./style";
import { FieldValues, useForm } from "react-hook-form";

type Props = {
  dataModel: {
    headers: string[];
    options: JSX.Element[];
  };
  open: boolean;
  onSubmit: (data: FieldValues) => void;
};

export const ModalCustom = ({ dataModel, open, onSubmit }: Props) => {
  const { register, handleSubmit } = useForm();

  return (
    <Modal open={open}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={style.container}>
          <Grid
            container
            spacing={8}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {dataModel.headers.map((item, index) => {
              return (
                <Grid item xs={6}>
                  {dataModel.options[index] == null ? (
                    <TextField
                      label={item}
                      {...register(item)}
                      variant="outlined"
                      required
                    />
                  ) : (
                    dataModel.options[index]
                  )}
                </Grid>
              );
            })}
          </Grid>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ButtonGroup variant="contained">
              <Button>-</Button>
              <Button disabled>1</Button>
              <Button>+</Button>
            </ButtonGroup>
          </Box>
          <br />
          <Button
            type="submit"
            color="info"
            sx={{ width: "100%" }}
            variant="outlined"
          >
            Adicionar
          </Button>
        </Box>
      </form>
    </Modal>
  );
};
