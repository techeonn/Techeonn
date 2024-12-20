import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import HomePageWithVideoBackground from "../components/VideoBackground"

const HomePage = () => {
  return (
    <Box sx={{ minHeight: "100vh", py: 0 }}>
      
        <HomePageWithVideoBackground/>
      {/* Featured Projects Section */}
      <Box  sx={{ px: { xs: 2, sm: 4, md: 8 }, py: 6 ,backgroundImage: `url('videos/vaporwave.gif')`, // Replace with your GIF path
        backgroundSize: "contain", }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            mb: 4,
          }}
        >
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {/* Example Project Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3,
      borderRadius: "10px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05) rotate(1deg)",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
      }}}>
              <CardMedia
                component="img"
                height="160"
                image="/images/project1.png"
                alt="Project 1"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  EasyPay Dashboard
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  A seamless payment dashboard to manage transactions and visualize expenses.
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/projects/1"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more project cards here */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="btn" sx={{boxShadow: 3,
      borderRadius: "10px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05) rotate(1deg)",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
      }}}>
              <CardMedia
                component="img"
                height="160"
                image="/images/project1.png"
                alt="Project 1"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  EasyPay Dashboard
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  A seamless payment dashboard to manage transactions and visualize expenses.
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/projects/1"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{boxShadow: 3,
      borderRadius: "10px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05) rotate(1deg)",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
      }}}>
              <CardMedia
                component="img"
                height="160"
                image="/images/project1.png"
                alt="Project 1"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  EasyPay Dashboard
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  A seamless payment dashboard to manage transactions and visualize expenses.
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/projects/1"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Featured Blogs Section */}
      <Box
        sx={{
          backgroundColor: "#fff",
          backgroundImage: `url('videos/vaporwave.gif')`, // Replace with your GIF path
        backgroundSize: "contain",
          px: { xs: 2, sm: 4, md: 8 },
          py: 6,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            mb: 4,
          }}
        >
          Latest Blog Posts
        </Typography>
        <Grid container spacing={4}>
          {/* Example Blog Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3,
      borderRadius: "10px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05) rotate(1deg)",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
      }}}>
              <CardMedia
                component="img"
                height="160"
                image="/images/blog1.png" // Add blog image
                alt="Blog 1"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Understanding React
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Learn the fundamentals of React and build dynamic UIs.
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/blogs/1"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3,
      borderRadius: "10px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05) rotate(1deg)",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
      }}}>
              <CardMedia
                component="img"
                height="160"
                image="/images/blog1.png" // Add blog image
                alt="Blog 1"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Understanding React
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Learn the fundamentals of React and build dynamic UIs.
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/blogs/1"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3,
      borderRadius: "10px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05) rotate(1deg)",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
      }}}>
              <CardMedia
                component="img"
                height="160"
                image="/images/blog1.png" // Add blog image
                alt="Blog 1"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Understanding React
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Learn the fundamentals of React and build dynamic UIs.
                </Typography>
                <Button
                  size="small"
                  color="primary"
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/blogs/1"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more blog cards here */}
        </Grid>
      </Box>

      {/* Call-to-Action Section */}
      <Box
        sx={{
          backgroundColor: "black",
          backgroundImage: `url('videos/vaporwave.gif')`, // Replace with your GIF path
        backgroundSize: "contain",
          color: "white",
          textAlign: "center",
          py: 6,
          px: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Ready to Dive In?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Explore projects and blogs to level up your development skills.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 2 }}
          component={Link}
          to="/contact"
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
