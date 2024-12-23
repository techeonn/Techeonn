import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor:  "rgba(0, 0, 0, 0.5)" ,borderRadius:"4px",width:"100%"}}>
      <Toolbar>
        {/* Logo */}
        <Box component="img" src="images/logo.png" alt="TechEon Logo" sx={{ height: 40, mr: 1 }} />

        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
          }}
        >
          TechEonn
        </Typography>

        {/* Navigation Links for Desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button component={Link} to="/" sx={{ color: "white" ,fontWeight:"bold"}}>
            Home
          </Button>
          <Button component={Link} to="/projects" sx={{ color: "white" ,fontWeight:"bold"}}>
            Projects
          </Button>
          <Button component={Link} to="/services" sx={{ color: "white" ,fontWeight:"bold"}}>
            Services
          </Button>
          <Button component={Link} to="/blogs" sx={{ color: "white" ,fontWeight:"bold"}}>
            Blogs
          </Button>
          <Button component={Link} to="/about" sx={{ color: "white",fontWeight:"bold" }}>
            About Us
          </Button>
          <Button component={Link} to="/contact" sx={{ color: "white" ,fontWeight:"bold"}}>
            Contact
          </Button>
        </Box>

        {/* Menu Icon for Mobile */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Dropdown Menu for Mobile */}
        <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleMenuClose}
  sx={{
    display: { xs: "block", md: "none" },
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    mt: 1,
    "& .MuiMenuItem-root": {
      padding: "12px 12px",
      fontSize: "16px",
      fontWeight: 500,
      color: "#333",
      borderRadius: "6px",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        color: "#007BFF",
        transition: "all 0.3s ease",
      },
    },
  }}
>
  <MenuItem onClick={handleMenuClose} component={Link} to="/">
    Home
  </MenuItem>
  <MenuItem onClick={handleMenuClose} component={Link} to="/projects">
    Projects
  </MenuItem>
  <MenuItem onClick={handleMenuClose} component={Link} to="/services">
    Services
  </MenuItem>
  <MenuItem onClick={handleMenuClose} component={Link} to="/blogs">
    Blogs
  </MenuItem>
  <MenuItem onClick={handleMenuClose} component={Link} to="/about">
    About Us
  </MenuItem>
  <MenuItem onClick={handleMenuClose} component={Link} to="/contact">
    Contact
  </MenuItem>
</Menu>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
