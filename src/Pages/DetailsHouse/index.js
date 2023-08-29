import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Snackbar from "@mui/material/Snackbar";
import Alert  from "@mui/material/Alert";
import PhoneRoundedIcon from "@mui/icons-material/LocalPhone";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import BathroomIcon from "@mui/icons-material/Bathroom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import img1 from "../../Utils/images/img1.jpg";
import img2 from "../../Utils/images/img2.png";
import img3 from "../../Utils/images/img3.png";
import det from "../../Utils/images/det.png";



import Button from "@mui/material/Button";

import { fakeImage } from "../../Utils/staticData";

import Loading from "../../Components/Loading";

import "./style.css";

function DetailsHouse() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/barafathi/api/houses/${id}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const houseData = await response.json();
        setHouse(houseData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHouse();
  }, [id]);

  const [isFavorite, setIsFavorite] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const addToFavorite = async (id) => {
    const response = await fetch(
      `https://my-json-server.typicode.com/barafathi/api/houses/${id}`
    );
    const item = await response.json();
    fetch(
      "https://my-json-server.typicode.com/barafathi/api/houses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    )
      .then((response) => {
        if (response.ok) {
          setIsFavorite(true);
          setOpenSnackbar(true);
        } else {
        }
      })
      .catch((error) => {
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" className="root">
      {loading ? (
        <Loading />
      ) : (
        
        <Grid container>
          <Grid xs="12" sm="12" md="12" lg="12" className="imgSection">
            
            <div className="imageBox">
            <div className="img_detials">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
          </div>
              <img src={det} alt="house" />
            
            </div>
          </Grid>
          
          <Grid xs="12" sm="12" md="12" lg="8">
            <Typography variant="h4" className="title">
              {house.title}
            </Typography>
            <div className="room">
              <div className="bedroom">
                <LocalHotelIcon className="icon" style={{color :'#013244'}}/>
                <Typography variant="p" className="num">
                  bd{house.bedroom}
                </Typography>
              </div>
              <div className="bedroom">
                <BathroomIcon className="icon" style={{color :'#2A5555'}}/>
                <Typography variant="p" className="num">
                  ba{house.bathroom}
                </Typography>
              </div>
            </div>
          
            <Typography variant="h4" className="description">
            Description{house.category}
            </Typography>
           
            <Typography className="descDetails">{house.description}</Typography>
      
            <div className="descBtn">
              <Button
                className="btn"
                sx={{
                  marginRight: 2,
                  color: "white",
                  bgcolor: "#EB9235",
                  fontWeight: "500",
                  "&:hover": {
                    backgroundColor: "#EB9235",
                    color: "white",
                  },
                }}
              >
                         {isFavorite ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteIcon style={{ color: "white" }} className="favorite" onClick={() => addToFavorite(id)} />
            )} add to Favorite
              </Button>
            </div>
          </Grid>
          <Grid xs="12" sm="12" md="12" lg="4">
            <div className="loaction">
              <LocationOnRoundedIcon style={{color :'#2A5555'}}/>
              <Typography variant="h4" className="city">
                khanyounes
              </Typography>
            </div>
            <div className="descAddress">
            <Typography variant="h6" color={"white"}>
            Property owner information
                </Typography>
              <div className="name">
                <Typography>
                  <AccountCircleIcon />
                </Typography>
                <Typography variant="h6">
                  Name:
                  <br />
                 bara fathi
                </Typography>
              </div>
              <div className="name">
                <Typography>
                  <PhoneRoundedIcon />
                </Typography>
                <Typography variant="h6">
                  phone:
                  <br />
                  +972595230785
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          House added to favorites successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default DetailsHouse;
