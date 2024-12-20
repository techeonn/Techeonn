import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Paper,
  Divider,
} from '@mui/material';

const ProjectPage = () => {
  const { id } = useParams(); // To get project ID from the URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch project details from API
    const fetchProject = async () => {
      try {
        const response = await axios.get(`https://techeonn.onrender.com/api/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const handlePayment = async () => {
    const email = prompt('Enter your email to receive the download link:');
    if (!email) {
      alert('Email is required to proceed with the purchase.');
      return;
    }

    try {
      // Step 1: Create an order
      const orderResponse = await axios.post('https://techeonn.onrender.com/api/payments/create-order', {
        amount: project.price,
        email,
        projectId: id,
      });

      const { orderId } = orderResponse.data;

      // Step 2: Razorpay payment options
      const options = {
        key: 'rzp_test_PSVDDW9cX0ZoT5', // Replace with your Razorpay key ID
        amount: project.price * 100, // Convert price to paise
        currency: 'INR',
        name: 'TechEon',
        description: project.name,
        image: project.image,
        order_id: orderId,
        handler: async (response) => {
          // Step 3: Verify payment
          try {
            const verifyResponse = await axios.post('https://techeonn.onrender.com/api/payments/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              email,
              projectId: project._id,
            });

            if (verifyResponse.data.success) {
              alert('Payment successful! Check your email for the download link.');
            }
          } catch (error) {
            console.error('Payment verification failed:', error);
            alert('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          email,
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Payment initiation failed. Please try again.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found!</div>;

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column',mt:5 }}>
      {/* Main content area */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
              <img
                src={project.image}
                alt={project.name}
                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
              {project.name}
            </Typography>
            <Typography variant="body1" paragraph>
              {project.description}
            </Typography>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
              Price: ₹{project.price}
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: 2 }}
                href={project.demoUrl}
                target="_blank"
              >
                View Demo
              </Button>
              <Button variant="contained" color="secondary" onClick={handlePayment}>
                Buy Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Divider to create gap before footer */}
      <Divider sx={{ marginY: 4 }} />
    </Container>
  );
};

export default ProjectPage;
