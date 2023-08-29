import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import validation from '../../Utils/validations/register';
import image from "../../Utils/images/login.png";

import "./style.css";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
 

  const handleSignin = (event) => {
    navigate("/login");
  };

  const clear = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setError(null);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleusername = (event) => {
    setUsername(event.target.value);
  };
  const handlepassword = (event) => {
    setPassword(event.target.value);
  };

  const handleconfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlemobile = (event) => {
    setMobile(event.target.value);
  };

  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userDate = {
         username,
         password,
         confirmPassword,
         mobile,
     };

      await validation.validate(userDate, {
        abortEarly: false,                                                                                                                                                                mk
      });
      
      useEffect(() => {
        fetch('https://my-json-server.typicode.com/SajaRa20/newapi/newusers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDate),
        })
          .then(response => response.json())
          .then(data => {
            setOpen(true);
            clear();
            navigate("/login");
          })
          .catch(error => {
            setError(err.response ? err.response.data.message : err.errors[0]);
          });
      }, []);

    } catch (err) {
      setError(err.response ? err.response.data.message : err.errors[0]);
    }

  };


  return (                                                
    <Container maxWidth="lg" className="divregister">
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={12}
        paddingTop="2em"
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <CardMedia className="imgregister" component="img" image={image} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <article className="article-register">
            <Typography variant="h2"> Sign Up</Typography>
            <FormControl defaultValue="" className="formregister" required>
              <TextField
                id="outlined-basic"
                label="Enter user name..."
                variant="outlined"
                value={username}
                onChange={handleusername}
                required
              />
              <br />
              <TextField
                type="password"
                id="outlined-basic"
                label="Enter Password..."
                variant="outlined"
                value={password}
                onChange={handlepassword}
                required
              />
              <br />
              <TextField
                type="password"
                id="outlined-basic"
                label="Confirm password...."
                variant="outlined"
                value={confirmPassword}
                onChange={handleconfirmPassword}
                required
              />
              <br />
              <TextField
                type="password"
                id="outlined-basic"
                label="Enter you phone number..."
                variant="outlined"
                value={mobile}
                onChange={handlemobile}
                required
              />
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  Congrats! Signed up Successfully
                </Alert>
              </Snackbar>
              <Button
                onClick={handleSubmit}
                sx={{
                  marginTop: "1.5em",
                  color: "white",
                  bgcolor: "#EB9235",
                  fontSize: "20px",
                  fontWeight: "300",
                  "&:hover": {
                    backgroundColor: "#EB9235",
                    color: "white",
                  },
                }}
              >
                Sign up
              </Button>
              <Typography variant="p" className="Account">
                {" "}
                Do You Account?<span onClick={handleSignin}> Signin here</span>
              </Typography>
            </FormControl>
          </article>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Register;
