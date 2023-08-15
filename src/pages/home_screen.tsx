import { Box, Grid } from "@mui/material";
import PaperCustom from "../components/customCard";
import CustomDrawerDefault from "../components/customDefaultDrawer";
import { CustomChartLine } from "../components/customChartLine";

export default function HomeScreen() {
  return (
    <CustomDrawerDefault>
      <h1>kkk</h1>
      <Box sx={{ margin: 3 }}>
        <Grid container spacing={2}>
          <PaperCustom
            color="#e63e32"
            titulo="0 Produtos Cadastrados"
            subtitulo="Items no estoque"
            tituloBotao="Ver Relação De Produtos"
          />

          <PaperCustom
            titulo="0 Produtos Com Estoque"
            subtitulo="ZERADO"
            color="#32e689"
            tituloBotao="Ver Relação De Estoque Zerado"
          />
          <PaperCustom
            titulo="0 Produtos Com Estoque"
            subtitulo="MINIMO"
            color="#326be6"
            tituloBotao="Ver Relação De Estoque Minimo"
          />
          <PaperCustom
            varient
            titulo="Investimento: R$0,00"
            subtitulo="Retorno Previsto"
            color="#f27e30"
            tituloBotao="Margem de Lucro: 0,00%"
          />
        </Grid>
      </Box>
      <Grid sx={{ marginTop: 10 }} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomChartLine
            labels={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ]}
            title={"Entradas e saídas dos ultimos 10 dias"}
            heads={[
              {
                colors: "green",
                data: [1, 2, 3, 1, 2],
                label: "Entrada",
              },
              {
                colors: "blue",
                data: [2, 4, 3, 2, 4],
                label: "Saída",
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomChartLine
            labels={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ]}
            title={"Atividade nos ultimos 10 dias"}
            heads={[
              {
                colors: "orange",
                data: [1, 2, 3, 1, 2],
                label: "Atividade do sistema",
              },
            ]}
          />
        </Grid>
      </Grid>
    </CustomDrawerDefault>
  );
}
