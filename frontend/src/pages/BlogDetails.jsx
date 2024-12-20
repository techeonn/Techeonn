import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Box, CircularProgress, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const { id } = useParams();  // Extract blog id from the URL
  const [blog, setBlog] = useState(null);  // State to hold blog details
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    // Fetch the blog details from the API
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`https://techeonn.onrender.com/api/blogs/${id}`);
        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog details:', error);
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);  // Run when the component mounts or id changes

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!blog) {
    return <Typography variant="h6" align="center">Blog not found!</Typography>;
  }

  return (
    <Container sx={{ py: 4 ,mt:5}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h3" component="h1" gutterBottom>
                {blog.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                By {blog.author} | {new Date(blog.createdAt).toLocaleDateString()}
              </Typography>
              <img src={blog.image} alt={blog.title} style={{ width: '100%',height:"auto", borderRadius: '8px', marginBottom: '20px' }} />
              <Typography variant="body1" paragraph>
                {blog.content}
              </Typography>

              {/* Demo and Buy Now options (If applicable) */}
             
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
