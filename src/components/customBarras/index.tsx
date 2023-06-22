import { Breadcrumbs, Link, Typography } from "@mui/material";

type Props = {
  routeName: string;
};

export default function CustomBarras({ routeName }: Props) {
  return (
    <Breadcrumbs
      sx={{
        fontSize: 10,
      }}
      aria-label="breadcrumb"
    >
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Typography variant="caption" color="primary">
        {routeName}
      </Typography>
    </Breadcrumbs>
  );
}
