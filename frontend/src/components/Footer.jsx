import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 4,
        color: "white",
        backgroundImage: `url('videos/waveform.gif')`, // Replace with your GIF path
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container spacing={8} justifyContent="space-around">
          {/* Footer Left Section */}
          <Grid item xs={12} md={4}>
            {/* <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              TechEon
            </Typography> */}
            <img src="/images/full-logo.png" alt="" width={"100%"} />
            <Typography variant="body2">
            TechEonn delivers comprehensive IT services and cutting-edge web solutions. Leveraging innovation and expertise, we empower your business to achieve success.
            </Typography>
          </Grid>

          {/* Footer Center Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {["Home", "Projects","Services", "Blogs", "About Us", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                  color="inherit"
                  sx={{ mb: 1 }}
                  underline="hover"
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Footer Right Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Connect with Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {[
                { icon: <Facebook />, href: "https://www.facebook.com" },
                { icon: <Twitter />, href: "https://twitter.com" },
                { icon: <Instagram />, href: "https://www.instagram.com/techeonn/" },
                { icon: <LinkedIn />, href: "https://www.linkedin.com" },
              ].map(({ icon, href }) => (
                <IconButton
                  key={href}
                  color="inherit"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={href.split("//")[1]}
                  sx={{ "&:hover": { transform: "scale(1.1)" } }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box sx={{ mt: 4, textAlign: "center", py: 2}}>
  <Typography 
    variant="body2" 
    sx={{ 

      fontSize: { xs: "12px", sm: "14px" }, 
      color: "white", 
      "& a": { 
        textDecoration: "none", 
        color: "#007BFF", 
        marginLeft: "8px", 
        "&:hover": { textDecoration: "underline",cursor:"pointer" }
      } 
    }}
  >
    &copy; {new Date().getFullYear()} TechEonn | All Rights Reserved |  Terms of Use |<Link href="https://drive.google.com/file/d/1GTUsqMgmAAhHNvqFpDUoN-Llhq3s3TwY/view?usp=sharing">Privacy Policy</Link> | Sitemap
  </Typography>
</Box>

      </Container>
    </Box>
  );
};

export default Footer;
