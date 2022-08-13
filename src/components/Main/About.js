import React from "react";
import "../../Styles/About/about.css";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
export default function About() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        padding: 2,
        marginLeft: -2,
        backgroundImage:
          "url(https://cdn.mos.cms.futurecdn.net/kCbvedK262UGLXCLFeW5oS.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <h1 className="aboutTitle">About Us</h1>
          <p className="aboutText">
            This platform is designed to play fun quiz games. You can easily
            start the game by choosing any set of questions. Your students' mood
            is sure to lift 100%
          </p>
          <button className="readBtn">Read More</button>
        </Grid>
        <Grid item xs={7}>
          <img
            className="aboutImg"
            src="https://www.braincandy.in/wp-content/uploads/2019/07/1.png"
            width={"100%"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
