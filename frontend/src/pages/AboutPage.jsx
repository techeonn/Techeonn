import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Container sx={{ py: 4, mt: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" >
        About Techeon
      </Typography>

      <Typography variant="h5" paragraph>
        TechEonn is a leading managed IT and web services provider. We provide customized web solutions according to business needs.

        We create IT solutions to enhance business performance by utilizing our extensive experience. Our team of industry professionals provides tailored services to meet your specific needs. You can collaborate with us for various IT solutions, including website development, app development, and software development.
      </Typography>


      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)',
              color: 'white',
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography variant="h5" gutterBottom>
              Our Features
            </Typography>
            <Typography variant="body1" paragraph>
              In a digital-first world, having the right web solutions can transform your business. Here’s how Techeon stands out:
            </Typography>
            <Typography variant="body1" paragraph>
              1. Tailored Web Solutions <br />
              2. E-Commerce Excellence  <br />
              3. Modern UI/UX Design  <br />
              4. Responsive Development   <br />
              5. SEO & Digital Growth  <br />
              6. Maintenance & Support <br />
              7. Cutting-Edge Technologies  <br />
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 3 }} component={Link} to="/contact">
              Connect With Us  &rarr;
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3 }}>
            <img src="images/about.png" alt="" height={"100%"} width={"100%"} />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent="center" >
        <Grid item xs={12} md={6}marginTop={"2%"}>
          <Box
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)',
              color: 'white',
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography variant="h5" gutterBottom>
              Our Journey
            </Typography>
            <Typography variant="body1" paragraph>
              Techeon is a platform dedicated to sharing coding projects with the world.
              Our mission is to make coding accessible, provide valuable resources, and promote knowledge sharing
              through our open-source projects and blog posts.
            </Typography>
            <Typography variant="body1" paragraph>
              Since our inception, we've strived to create a community where developers can showcase their projects,
              get feedback, and collaborate on future ideas. We're passionate about helping coders, whether it's
              through simple scripts, complex applications, or tutorials.
            </Typography>
            <Typography variant="body1" paragraph>
              Techeon is not just a place to view projects but an ecosystem that encourages learning, growth, and
              exploration in the ever-evolving world of technology.
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 3 }} component={Link} to="/">
              Explore Projects
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} marginTop={"2%"}>
          <Box
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)',
              color: 'white',
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              height:"90%"
            }}
          >
            <Typography variant="h5" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
              Our vision is to build a platform that brings together coders, developers, and learners to share their
              knowledge, ideas, and experiences. Techeon aims to be a hub where developers can showcase their work
              to the world, access valuable learning resources, and get recognized for their efforts.
            </Typography>
            <Typography variant="body1" paragraph>
              We believe that sharing is the key to innovation, and through our platform, we hope to empower others
              to explore their creativity, solve real-world problems, and stay ahead in the fast-paced tech industry.
            </Typography>
          </Box>
        </Grid>

      
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h6" paragraph>
          Join us on our journey to revolutionize the way developers share, learn, and grow together.
        </Typography>
        <Button variant="outlined" color="primary" component={Link} to="/contact">
          Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default AboutPage;
