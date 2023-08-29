// import React from "react";
// import { useNavigate } from 'react-router-dom';
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import EmailIcon from '@mui/icons-material/Email';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { Box } from "@mui/material";



// function Footer() {


//     const navigate = useNavigate();

//     const handleClick = () => {
//       navigate("/about-us");
//     };

//     const handleHome = () => {
//       navigate("/");
//     };


//     const handleTwitterClick = () => {
//       const twitterLink = 'https://twitter.com/home';
//       window.open(twitterLink, '_blank');
//     };

//     const handleEmailClick = () => {
//       const emailLink = 'https://mail.google.com/mail/u/0/#inbox';
//       window.open(emailLink, '_blank');
//     };

//     const handleLinkedClick = () => {
//       const Link = 'https://www.linkedin.com/messaging/thread/new/';
//       window.open(Link, '_blank');
//     };



//   return (
//     <Box
//     component="footer" sx={{p: 4, bgcolor: "#2A5555", marginTop:' 39px'}} >
//     <Container maxWidth="lg">
//       <Grid container  sx={{display:'flex',justifyContent:'center'}}>
//         <Grid item xs={6} sm={4} >
//           <Typography variant="h6" sx={{color: "#EB9235"}}  gutterBottom>
//           About us
//           </Typography>
//           <Typography variant="body2" color="white">
//           Specializes in presenting properties in a distinctive way,
//            allowing you to search for your desired 
//           property based on the specifications you have in mind
//           </Typography>
//         </Grid>
//         <Grid item xs={6} sm={4}>
//           <Typography variant="h6" sx={{color: "#EB9235"}}  gutterBottom>
//           Important links
//           </Typography>
//           <Typography variant="body2" color="white" onClick={handleHome}>
//           Home
//           </Typography>
//           <Typography variant="body2" color="white" onClick={handleClick}>
//           about us
//           </Typography>
//           <Typography variant="body2" color="white">
//           contact us
//           </Typography>
//         </Grid>
//         <Grid item xs={6} sm={4}>
//           <Typography variant="h6" sx={{color: "#EB9235"}}  gutterBottom>
//           contact us
//           </Typography>
//           <Link  sx={{color: "white"}} onClick={handleTwitterClick}>
//             <TwitterIcon />
//           </Link>
//           <Link
//             sx={{ pl: 1, pr: 1,color: "white" }}
//             onClick={handleEmailClick}
//           >
//             <EmailIcon />
//           </Link>
//           <Link  sx={{color: "white"}} onClick={handleLinkedClick} > 
//             <LinkedInIcon />
//           </Link>
//         </Grid>
//       </Grid>
//     </Container>
//   </Box>
//   );
// }

// export default Footer;
import  React from 'react';
import {AppBar ,Box,Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Hero from '../../Utils/images/logo.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './style.css';


const pages = ['contact', 'AboutUs'];
const settings = ['Profile', 'Favorite', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  

  return (
    <AppBar position="static" style={{ backgroundColor: '#013244' }} className='footer'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
            <img src={Hero} className='hero' alt="Description of the image" />
          </Typography>
          <div>
      <LinkedInIcon style={{ color: '#FFFFFF', fontSize: 30, margin: '0 10px' }} />
      <TwitterIcon style={{ color: '#FFFFFF', fontSize: 30, margin: '0 10px' }} />
      <InstagramIcon style={{ color: '#FFFFFF', fontSize: 30, margin: '0 10px' }} />
      </div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            
              </IconButton>
            </Tooltip>
            <p>Reserved Rights All — 2023©</p>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

