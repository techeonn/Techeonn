import React, { useState } from "react";
import { Container, Typography, Grid, Box, Button, TextField, Paper, Alert } from "@mui/material";
import axios from "axios";

const ServicesPage = () => {
  const [formStatus, setFormStatus] = useState({ success: false, error: false });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await axios.post("http://localhost:3000/api/contact", data);
      setFormStatus({ success: true, error: false });
    } catch (error) {
      console.error("Error submitting the form:", error);
      setFormStatus({ success: false, error: true });
    }
  };

  return (
    <Container sx={{ minHeight: "100vh", padding: 4 ,mt:5}}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Transform Your Ideas Into Reality with Expert Development Services!
        </Typography>
        <Typography variant="body1">
          We specialize in creating tailored software solutions for your unique needs. From web apps to machine learning models, we've got you covered!
        </Typography>
      </Box>

      {/* Services Offered */}
      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h4" gutterBottom>
          Services Offered
        </Typography>
        <Grid container spacing={4}>
          {[
            { title: "Full-stack Web Development", icon: "💻" },
            { title: "Mobile App Development", icon: "📱" },
            { title: "Machine Learning & AI Solutions", icon: "🤖" },
            { title: "Automation & Scripting", icon: "⚙️" },
            { title: "Debugging & Optimization", icon: "🐞" },
            { title: "API Integration & Development", icon: "🔗" },
          ].map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} sx={{ my:"auto", padding: 2, textAlign: "center" ,height:50,boxShadow: 3,
      borderRadius: "10px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05) rotate(1deg)",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)"}}}  >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {service.icon} {service.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Portfolio Section */}
      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h4" gutterBottom>
          Portfolio
        </Typography>
        <Grid container spacing={4}>
          {[
            { name: "EasyPay", description: "Visualizing financial data.", technologies: "React, Node.js", link: "#" },
            { name: "HealthShield", description: "AI-powered health predictions.", technologies: "Python, Flask", link: "#" },
            { name: "WeatherNow", description: "Real-time weather updates.", technologies: "React, OpenWeatherMap API", link: "#" },
          ].map((project, index) => (
            <Grid item xs={12} md={4} key={index} >
              <Paper elevation={3} sx={{ padding: 2 ,boxShadow: 3,
      borderRadius: "10px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05) rotate(1deg)",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)"}}}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
                  Technologies: {project.technologies}
                </Typography>
                <Button variant="outlined" href={project.link} target="_blank">
                  View Project
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Form */}
      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Paper elevation={3} sx={{ padding: 4, borderRadius:10,  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)" }}>
          {formStatus.success && (
            <Alert severity="success" sx={{ marginBottom: 2 }}>
              Thank you! Your inquiry has been submitted.
            </Alert>
          )}
          {formStatus.error && (
            <Alert severity="error" sx={{ marginBottom: 2 }}>
              Something went wrong. Please try again later.
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField label="Name" name="name" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Email" name="email" type="email" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Project Description" name="description" multiline rows={4} fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Budget" name="budget" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Timeline" name="timeline" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default ServicesPage;
