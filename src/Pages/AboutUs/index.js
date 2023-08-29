import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import image from '../../Utils/images/about.png'
 import   './style.css';
import { color } from "@mui/system";


function AboutUs() {
  return (
<Container maxWidth="lg">
  <Grid container justify="center" alignItems="center" spacing={5} paddingTop='2em'>
   
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <article>
        <Typography variant="h2" className="about-us">About Us</Typography>
        <Typography className="about" variant="p">
        Welcome to our real estate website! We take pride in offering a comprehensive and distinguished platform designed to facilitate the process of searching and finding the perfect property for you.
We understand that real estate represents a significant investment in the lives of individuals and families.  
        </Typography>
      </article>
    </Grid>
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <CardMedia
        component="img"
        height="504"
        image={image}
      />
    </Grid>
  </Grid>
  
</Container>

  );
}

export default AboutUs;


