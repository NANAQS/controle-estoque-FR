import { Grid, Typography } from "@mui/material";

type Props = {
  titulo: string;
  tituloBotao: string;
  mobileWidth?: number;
  width?: number;
  color: string;
  subtitulo: string;
  varient?: boolean;
};

const PaperCustom = ({
  titulo,
  tituloBotao,
  mobileWidth,
  width,
  color,
  subtitulo,
  varient,
}: Props) => {
  const colorNew = (color: string): string => {
    const red = parseInt(color.substring(1, 3), 16);
    const green = parseInt(color.substring(3, 5), 16);
    const blue = parseInt(color.substring(5, 7), 16);

    const lightenAmount = 0.8;
    const lighterRed = Math.round(red + (255 - red) * lightenAmount);
    const lighterGreen = Math.round(green + (255 - green) * lightenAmount);
    const lighterBlue = Math.round(blue + (255 - blue) * lightenAmount);

    const lighterColor = `#${lighterRed
      .toString(16)
      .padStart(2, "0")}${lighterGreen
      .toString(16)
      .padStart(2, "0")}${lighterBlue.toString(16).padStart(2, "0")}`;

    return lighterColor;
  };

  return (
    <Grid item xs={mobileWidth ?? 12} sm={width ?? 6}>
      <div
        style={{
          background: color,
          borderRadius: 5,
          minHeight: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <Typography variant="h5" color={colorNew(color)}>
            {titulo}
          </Typography>
          <Typography variant="caption" color={colorNew(color)}>
            {subtitulo}
          </Typography>
        </div>

        {varient != null ? (
          <Typography color={colorNew(color)} variant="button">
            {tituloBotao}
          </Typography>
        ) : (
          <Typography
            color={colorNew(color)}
            sx={{ textDecoration: "underline", marginTop: 2 }}
            variant="button"
          >
            {tituloBotao}
          </Typography>
        )}
      </div>
    </Grid>
  );
};

export default PaperCustom;
