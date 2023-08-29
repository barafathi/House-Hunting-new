import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Typography } from "@mui/material";

import CardContainer from "../../Components/CardContainer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment  from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import "./style.css";

function Landing() {
  const [houses, setHouses] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const navigate = useNavigate();

  const handleinput = () => {
    navigate("/houses");
  };

  useEffect(() => {
    // Fetch houses data from the API
    fetch("https://my-json-server.typicode.com/barafathi/api/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const priceThreshold = 300;

    // Filter best seller houses based on criteria
    const filteredHouses = houses.filter(
      (house) => house.price < priceThreshold
    );
    filteredHouses.length = 6;
    houses.length = 3;
    setBestSellers(filteredHouses);
  }, [houses]);

  return (
    <>
      <Box  className="header" sx={{ width: '100%'}}>
        <div className="divhero">
          <Typography variant="h3" className="herotext">
          SWEET HOME FOR SMALL FAMILY
          </Typography>
          <Typography variant="h4" className="herotext" paddingBottom={'0.5em'}>
          Allow us to guide you through the innovative stress free approach in
          </Typography>
          <Typography variant="h5" className="herotext" paddingBottom={'0.5em'}>
          finding your dream Properties.
          </Typography>
          <TextField
          onClick={handleinput}
          className="herosearch"
      variant="outlined"
      placeholder="search about house"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
        </div>
      </Box >
      <Container maxWidth="lg">
        <div className="housesSection">
          <Typography variant="h4" className="sectionTitle">
          Recent Add
          </Typography>
          <CardContainer houses={houses} className="card"/>
        </div>

        <div className="housesSection">
          <Typography variant="h4" className="sectionTitle">
            Newest House
          </Typography>
          <CardContainer houses={houses} />
        </div>
      </Container>
    </>
  );
}

export default Landing;
