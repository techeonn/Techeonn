import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Alert, useMediaQuery } from '@mui/material';
import Spline from '@splinetool/react-spline';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery('(max-width: 900px)'); // Mobile breakpoint

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('https://techeonn.onrender.com/send-email', formData);
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <Container maxWidth="lg" sx={{ py: 6, mt: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Contact Us
      </Typography>

      <Grid 
        container 
        spacing={4} 
        alignItems="center"
        sx={{ height: isMobile ? 'auto' : '80vh' }} 
      >
        {/* Contact Form Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              bgcolor: 'white',
              color: 'black',
              p: 4,
              borderRadius: 4,
              boxShadow: 3,
              height: isMobile ? 'auto' : '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" gutterBottom>
              We'd Love to Hear From You!
            </Typography>
            <Typography variant="body1" paragraph>
              Please fill out the form below with your message, and we’ll get back to you as soon as possible.
            </Typography>

            {submitStatus && (
              <Alert severity={submitStatus === 'success' ? 'success' : 'error'} sx={{ mb: 2 }}>
                {submitStatus === 'success'
                  ? 'Your message has been sent successfully!'
                  : 'Please fill in all the fields.'}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={!formData.name.trim() && submitStatus === 'error'}
                helperText={!formData.name.trim() && submitStatus === 'error' ? 'Name is required' : ''}
              />
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={!formData.email.trim() && submitStatus === 'error'}
                helperText={!formData.email.trim() && submitStatus === 'error' ? 'Email is required' : ''}
              />
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                sx={{ mb: 2 }}
                error={!formData.message.trim() && submitStatus === 'error'}
                helperText={!formData.message.trim() && submitStatus === 'error' ? 'Message is required' : ''}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Box>
        </Grid>

        {/* Spline 3D Model Section */}
        <Grid item xs={12} md={6}>
          {!isMobile && <Box
            sx={{
              height: isMobile ? '300px' : '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              borderRadius: 4,
              boxShadow: 3,
            }}
          >
            <Spline
              style={{ width: '100%', height: '100%' }}
              scene="https://prod.spline.design/aMZvVIOOpTCeKOBR/scene.splinecode"
            />
          </Box>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
