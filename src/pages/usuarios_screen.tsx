import { Button, ButtonGroup, Typography } from "@mui/material";
import CustomDrawerDefault from "../components/customDefaultDrawer";
import CustomTable from "../components/customTable";
import { Person } from "@mui/icons-material";
import CustomBarras from "../components/customBarras";

type Props = {};

export default function UsuariosScreen({}: Props) {
  return (
    <CustomDrawerDefault>
      <div
        style={{
          padding: 10,
          marginTop: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <CustomBarras routeName="usuarios" />
          <Typography variant="body1">
            <Person color="primary" />
            Lista Usuarios
          </Typography>
          <Button color="info" sx={{ width: "100%" }} variant="outlined">
            Novo Usuario
          </Button>
        </div>
        <CustomTable
          tableHeader={[
            "Foto",
            "Ord",
            "Codigo",
            "Usuario",
            "Cargo",
            "Nivel Acesso",
            "Data Cadastro",
            "Último Acesso",
            "Bloqueado",
            "Acões",
          ]}
          tableData={[
            [
              <img
                width="50"
                src="https://images.unsplash.com/photo-1524952249965-023a2a31663d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80"
              />,
              "1",
              "235467",
              "Carlos De Andrade",
              "Caixa",
              "Parcial",
              "23/05/2023",
              "25/06/2023",
              "Não",
              <ButtonGroup
                variant="contained"
                aria-label="Disabled elevation buttons"
              >
                <Button>Bloquear</Button>
                <Button>Verificar</Button>
              </ButtonGroup>,
            ],
          ]}
        />
      </div>
    </CustomDrawerDefault>
  );
}
