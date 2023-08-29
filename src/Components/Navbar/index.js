import React , { useContext ,useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import image from "../../Utils/images/logo.png";
import AuthContext from '../../Components/Context/AuthContext';
import "../Navbar/style.css";

function NavBar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(false);

 
  const [anchorEl, setAnchorEl] = useState(false);
  const [error, setError] = useState('');

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const handleabout = () => {
    navigate("/about-us");
  };

  const handlehousese = () => {
    navigate("/houses");
  };

  const handlelogin = () => {
    navigate("/login");
  };

  const handlregister = () => {
    navigate("/register");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleout = () => {
    try {
      setOpenSnackbar(true);
      setIsAuth(false); 
      navigate("/");
    } catch (err) {
      setError('Internal server Error');
    }
  };


  return (
    <AppBar sx={{ bgcolor: "#013244", height: "67px" }}>
      <Container maxWidth="xl">
      {console.log(isAuth)}
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={image} className="img" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center">About us</Typography>
                <Typography textAlign="center"> </Typography>
                <Typography textAlign="center">Housese</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#F6F6F6",
              textDecoration: "none",
            }}
          >
            <img src={image} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={handleabout}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About us
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}></Button>
            <Button
              onClick={handlehousese}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Housese
            </Button>
          </Box>
          {isAuth === false ? (
            <>
              <Box>
                <Button
                 onClick={handlregister}
                  className="btn"
                  sx={{
                    marginRight: 2,
                    color: "white",
                    bgcolor: "#FFC107",
                    fontWeight: "500",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#2A5555",
                    },
                  }}
                >
                  SIGNUP
                </Button>
                <Button
                  onClick={handlelogin}
                  sx={{
                    marginRight: 2,
                    color: "#2A5555",
                    bgcolor: "white",
                    fontWeight: "500",
                    "&:hover": {
                      backgroundColor: "#EB9235",
                      color: "white",
                    },
                  }}
                >
                  LOGIN
                </Button>
              </Box>
            </>
          ) : (
            <>
              <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
               <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleout}>Log out </MenuItem>
              </Menu>
            </div> 
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          LogOut  successfully!
        </Alert>
      </Snackbar>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;