// src/pages/BlogsPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, CardMedia, Button, Box, CircularProgress, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch blogs with pagination
  const fetchBlogs = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://techeonn.onrender.com/api/blogs?page=${page}&limit=6`);
      setBlogs(response.data.blogs);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
    } catch (err) {
      setError('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  // Fetch blogs when the component mounts or when the page changes
  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold' ,mt:9}}>
        Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
            <Card sx={{ height: '100%',boxShadow: 3,
      borderRadius: "10px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05) rotate(1deg)",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
      }}}>
              {blog.image && (
                <CardMedia
                  component="img"
                  alt={blog.title}
                  height="200"
                  image={blog.image}
                  sx={{ objectFit: 'cover' }}
                />
              )}
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {blog.summary}
                </Typography>
                <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5,marginBottom:5 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          color="primary"
          size="large"
        />
      </Box>
    </Container>
  );
};

export default BlogsPage;
