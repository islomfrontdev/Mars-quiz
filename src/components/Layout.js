import { Grid } from "@mui/material";
import Aside from "./Aside";
import Info from "./Info";
import Main from "./Main";

function Layout() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2.5}>
        <Aside />
      </Grid>
      <Grid item xs={7.5}>
        <Main />
      </Grid>
      <Grid item xs={2}>
        <Info />
      </Grid>
    </Grid>
  );
}

export default Layout;
