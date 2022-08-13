import React from "react";
import AreaChartUsers from "./Charts/AreaChart";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import BarChartUsers from "./Charts/Bar";
import Complaint from "./Charts/Scatter";
import UsingPlatform from "./Charts/Using";
export default function Dashboard() {
  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      <h4>Students Coins By Month</h4>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <AreaChartUsers />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              height: "300px",
            }}
          >
            <BarChartUsers />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              height: "300px",
            }}
          >
            <Complaint />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              height: "300px",
            }}
          >
            <UsingPlatform />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
