import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import LoginIcon from '@mui/icons-material/Login';

// const pages = [
//   "tourism",
//   "student",
//   "job",
//   "business",
// ];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const styles = {
  logo: {
    width: "150px",
    height: "auto",
    marginRight: "2rem"
  }
}

function ResponsiveAppBar() {
  const navigate = useNavigate();
  
  const [ loggedUser, setUser ] = useState({});
  const [ pages, setPages ] = useState([]);

  useEffect(() => {
    // console.log();
    console.log(loggedUser);
    setUser(localStorage.getItem('User') !== 'undefined' ? JSON.parse(localStorage.getItem('User')) : localStorage.clear())
    const user = JSON.parse(localStorage.getItem('User'));
    if ( user ) {
      if ( user.auth === 0 ) {
        setPages([]);
      }
      else if ( user.role === "Admin" ) {
        setPages([
          "tourismadmin",
          "studentadmin",
          "jobadmin",
          "businessadmin",
          "useradmin",
        ]);
      } else {
        setPages([
          "tourism",
          "student",
          "job",
          "business",
        ]);
      }
    }
  }, [loggedUser]);

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

  const handleLogOutButton = () => {
    localStorage.removeItem("User");
    navigate("/login");
    setAnchorElUser(null);
  };

  const navItemClicked = (link) => {
    navigate("/" + link);
    setAnchorElUser(null);
  }

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#8585856e" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src="/logo.png" alt='casablanca logo' style={styles.logo} />
          </Link>

          {
            loggedUser && (
              <React.Fragment>
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
                      <MenuItem key={page} onClick={() => { navItemClicked(page) }}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={() => { navItemClicked(page) }}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
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
                    <MenuItem onClick={handleLogOutButton}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </React.Fragment>
            )
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;