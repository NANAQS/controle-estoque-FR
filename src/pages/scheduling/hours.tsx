import React from "react";
import SchedulingDrawer from "../../components/Scheduling_customDefaultDrawer";
import { Box, Grid } from "@mui/material";
import CustomCard from "../../components/CustomCardScheduling";

type Props = {};

export const HoursScreen = (props: Props) => {
  const [windowWidth, setWindowWidth] = React.useState(
    window.innerWidth > 1032
  );
  return (
    <SchedulingDrawer>
      <Box
        sx={{
          marginTop: 10,
        }}
      >
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {[...Array(7).keys()].map((_, index) => (
            <Grid
              item
              xs={windowWidth ? 4 : undefined}
              md={windowWidth ? undefined : 3}
            >
              <CustomCard index={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </SchedulingDrawer>
  );
};
