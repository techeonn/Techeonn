import  { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Pagination,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";


const ProjectGallery = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProjects, setTotalProjects] = useState(0);
  const projectsPerPage = 6;

  useEffect(() => {
    fetchProjects();
  }, [currentPage]);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://techeonn.onrender.com/api/projects?page=${currentPage}&limit=${projectsPerPage}`);
      const data = await response.json();
      setProjects(data.projects);
      setTotalProjects(data.totalProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4,fontWeight:"bold" ,mt:5}}>
        Projects
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project._id}>
                <Card sx={{ maxWidth: 345, boxShadow: 3,

              background:"rgba(255,255,255,0.9)",

      borderRadius: "10px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05) rotate(1deg)",
        boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
      }}}>
                  <CardMedia
                    component="img"
                    alt={project.name}
                    height="200"
                    image={project.image || "images/default-image.jpg"}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description.slice(0, 100)}...
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
                    <Typography variant="body2" color="text.primary">
                    ₹{project.price}
                    </Typography>
                    <Button
                      component={Link}
                      to={`/projects/${project._id}`}
                      variant="contained"
                      color="primary"
                    >
                      View Details
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={Math.ceil(totalProjects / projectsPerPage)}
              page={currentPage}
              onChange={handleChangePage}
              color="primary"
            />
          </Box>
        </>
      )}
    </Container>
  );
};

export default ProjectGallery;
