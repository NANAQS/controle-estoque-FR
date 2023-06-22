import { Grid } from "@mui/material";
import PaperCustom from "../components/customCard";
import CustomDrawerDefault from "../components/customDefaultDrawer";
import { CustomChartLine } from "../components/customChartLine";

export default function HomeScreen() {
  return (
    <CustomDrawerDefault>
      <h1>kkk</h1>
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
      <Grid sx={{ marginTop: 10 }} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomChartLine />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomChartLine />
        </Grid>
      </Grid>
    </CustomDrawerDefault>
  );
}
