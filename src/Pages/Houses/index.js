import React, { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import SearchIcon from "@mui/icons-material/SearchSharp";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CardContainer from '../../Components/CardContainer';

import { locationFilter } from "../../Utils/staticData";


import "./style.css";

function SearchPage() {
  const [houses, setHouses] = useState([]);
  const [type, setType] = useState();
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [location, setLocation] = useState();
  const [bedrooms, setBedrooms] = useState(0);
  const [priceRange, setPriceRange] = useState();

  // const resetInputs = () => {
  //   setLocation("");
  //   setType("");
  //   setBedrooms(0);
  //   setPriceRange([50, 700]);
  // };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  
  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/SajaRa20/newapi/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredHouses = houses.filter((house) => 
    (!location || house.city.toLowerCase() === location.toLowerCase()) ||
    (bedrooms && house.bedroom === +bedrooms) ||
    (priceRange && house.price >= priceRange[0] && house.price <= priceRange[1]) ||
    (type && house.category.toLowerCase().includes(type.toLowerCase().trim()))
  );
    setFilteredHouses(filteredHouses);
  };

  return (
    <Container>
      <div className="herosearchpage">
        <form className="searchhh" onSubmit={handleSearch}>
          <input
            className="hero-searchInput"
            type="search"
            placeholder="Search for the type you want!"
            onChange={handleTypeChange}
          />
          <button className="serach-btn">
            <SearchIcon className="searchicon"></SearchIcon>
          </button>
        </form>
        <div className="filter">
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">city</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={location}
              label="Age"
              onChange={handleLocationChange}
            >
              {locationFilter.map((item) => (
                <MenuItem value={item}>{item.toLocaleLowerCase()}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="outlined-Bedroom-input"
            label="Bedroom"
            type="number"
            value={bedrooms}
            onChange={handleBedroomsChange}
          />
          

          {/* <div>
            <InputLabel>Price </InputLabel>
            <Slider
              aria-label="Small"
              name="price"
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={50}
              max={700}
              variant="outlined"
              style={{ width: "300%" }}
              value={priceRange}
              onChange={handlePriceRangeChange}
            />
          </div> */}
        </div>
      </div>
      <div className="container">
        <Typography
          variant="h5"
          component="h4"
          color="primary"
          textAlign="center"
        >
        {filteredHouses.length}  houses Available
        </Typography>
        <CardContainer houses={filteredHouses} />
      </div>
    </Container>
  );
}

export default SearchPage;
