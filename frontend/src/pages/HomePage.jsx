import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Container, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import HomePageWithVideoBackground from "../components/VideoBackground"
import SkillsCarousel from "../components/SkillsComponent"
import PhoneIcon from '@mui/icons-material/Phone';
import axios from "axios";

const HomePage = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://techeonn.onrender.com/api/blogs?page=${page}&limit=3`);
      setBlogs(response.data.blogs);
    } catch (err) {
      console.log(err)
      setError('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  // Fetch blogs when the component mounts or when the page changes
  useEffect(() => {
    fetchBlogs();
    console.log(blogs)
  }, []);

  function formatSummary(summary, desiredLength) {
    if (summary.length > desiredLength) {
        // Truncate and add ellipsis
        return summary.slice(0, desiredLength - 3) + "...";
    } else if (summary.length < desiredLength) {
        // Pad with spaces
        return summary.padEnd(desiredLength, " ");
    } else {
        // If the summary is already the desired length, return as is
        return summary;
    }
}

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
    <Box sx={{ minHeight: "100vh", py: 0 }}>

      <HomePageWithVideoBackground />
      {/* Featured Projects Section */}
      <hr />
      <Box sx={{
        px: { xs: 2, sm: 4, md: 8 }, py: 6, backgroundImage: `url('videos/vaporwave.gif')`, // Replace with your GIF path
        backgroundSize: "contain",
      }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            mb: 4,
            fontSize: { xs: "1em", sm: "1.2rem", md: "1.5rem" }
          }}
        >
          WHO WE ARE ?
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            mb: 4,
            fontSize: { xs: "2rem", sm: "2rem", md: "3rem" }
          }}
        >
          Your Trusted Partner for Innovative IT Solutions

        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            mb: 4,
            fontSize: { xs: "0.8em", sm: "1.2rem", md: "1.2rem" }
          }}
        >
          TechEonn is a leading managed IT and web services provider. We provide customized web solutions according to business needs.
          <br /><br />
          We create IT solutions to enhance business performance by utilizing our extensive experience. Our team of industry professionals provides tailored services to meet your specific needs. You can collaborate with us for various IT solutions, including website development, app development, and software development.

        </Typography>
        <Grid container spacing={5} alignItems={"center"} justifyContent={"center"}>
          {/* Example Project Card */}
          <Grid item xs={12} sm={6} md={3.5}>
            <Card
              sx={{

                boxShadow: 3,
                borderRadius: "10px",
                background: "rgba(255,255,255,0.9)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05) rotate(1deg)",
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
                },
                "&:hover .icon": {
                  transform: "rotateY(360deg)", // Flip animation
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <img
                    className="icon"
                    height="20%"
                    width="20%"
                    src="/images/innovation.png"
                    alt="Innovation"
                    style={{
                      transition: "transform 0.6s ease", // Smooth flip animation
                    }}
                  />
                  <Box ml={3} mr={3}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                      Innovative
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      TechEonn's team of skilled professionals is committed to delivering innovative solutions tailored to your needs at every stage.
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

          </Grid>
          <Grid item xs={12} sm={6} md={3.5}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: "10px",
                background: "rgba(255,255,255,0.9)",

                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05) rotate(1deg)",
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
                },
                "&:hover .icon": {
                  transform: "rotateY(360deg)", // Flip animation
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <img
                    className="icon"
                    height="20%"
                    width="20%"
                    src="/images/experience.png"
                    alt="Experience"
                    style={{
                      transition: "transform 0.6s ease", // Smooth flip animation
                    }}
                  />
                  <Box ml={3} mr={3}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                      Experienced
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Our diverse industry experience enables us to integrate tailored technologies, unlocking their full potential for your business.
                      <br />
                      <br />
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

          </Grid>
          <Grid item xs={12} sm={6} md={3.5}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: "10px",
                background: "rgba(255,255,255,0.9)",

                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05) rotate(1deg)",
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
                },
                "&:hover .icon": {
                  transform: "rotateY(360deg)", // Flip animation
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <img
                    className="icon"
                    height="20%"
                    width="20%"
                    src="/images/teamwork.png"
                    alt="Collaborative"
                    style={{
                      transition: "transform 0.6s ease", // Smooth flip animation
                    }}
                  />
                  <Box ml={3} mr={3}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                      Collaborative
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      At TechEonn, collaboration is at the heart of our approach, driving quality and efficiency for businesses of all sizes.
                      <br />
                      <br />
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

          </Grid>

        </Grid>
        <Link to="/about">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "1% 2%",
            marginTop: "2%",
            marginLeft: "7%"
          }}

        >
          About Us &rarr;
        </Button>
        </Link>
      </Box>

      <hr />

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
            fontSize: { xs: "2rem", sm: "2rem", md: "3rem" }
          }}
        >
          Why TechEonn ?
        </Typography>
        <Grid container alignItems="center" spacing={3}>
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: "1em", sm: "1.2rem", md: "1.3rem" } }}>
              TechEonn is a premier IT service provider, offering tailored solutions designed to meet the unique needs of your business.
            </Typography>
            <Typography sx={{ fontSize: { xs: "1em", sm: "1.2rem", md: "1.3rem" } }} variant="body1" paragraph >
              Our expert web specialists are committed to delivering outstanding products and services, leveraging the latest technology frameworks and portal solutions to drive your business forward.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: { xs: "1em", sm: "1.2rem", md: "1.3rem" } }}>
              As a customer-centric company, our mission is to empower businesses in today’s technology-driven world with unparalleled IT and web solutions. We adhere to the highest industry standards, ensuring exceptional experiences and utmost client satisfaction.
            </Typography>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/why.png"
              alt="TurtlTech"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent={"center"}>
          {/* First row of cards */}
          <Grid item xs={12} sm={5}>
            <Card
              sx={{

                boxShadow: 3,
                borderRadius: "10px",
                background: "rgba(255,255,255,0.9)",

                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05) rotate(0deg)",
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
                },
                "&:hover .icon": {
                  transform: "rotateY(360deg)", // Flip animation
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <img
                    className="icon"
                    height="20%"
                    width="20%"
                    src="/images/experience.png"
                    alt="experience"
                    style={{
                      transition: "transform 0.6s ease", // Smooth flip animation
                    }}
                  />
                  <Box ml={3} mr={3}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                      Experienced Team
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      The strength of our team lies in their passion and authenticity.
                      We have well-experienced bright minds with grip on the latest technology.
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Card
              sx={{

                boxShadow: 3,
                borderRadius: "10px",
                background: "rgba(255,255,255,0.9)",

                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05) rotate(0deg)",
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
                },
                "&:hover .icon": {
                  transform: "rotateY(360deg)", // Flip animation
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <img
                    className="icon"
                    height="20%"
                    width="20%"
                    src="/images/documents.png"
                    alt="Startups"
                    style={{
                      transition: "transform 0.6s ease", // Smooth flip animation
                    }}
                  />
                  <Box ml={3} mr={3}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                      Robust Solutions for Startups
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Our thought process makes us different. Most service providers think about established brands, but we help start-ups to become established brands.
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Second row of cards */}
          <Grid item xs={12} sm={5}>
            <Card
              sx={{

                boxShadow: 3,
                borderRadius: "10px",
                background: "rgba(255,255,255,0.9)",

                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05) rotate(0deg)",
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
                },
                "&:hover .icon": {
                  transform: "rotateY(360deg)", // Flip animation
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <img
                    className="icon"
                    height="20%"
                    width="20%"
                    src="/images/creative-process.png"
                    alt="Creative"
                    style={{
                      transition: "transform 0.6s ease", // Smooth flip animation
                    }}
                  />
                  <Box ml={3} mr={3}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                      Creative Approach
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Having people from so many branches,
                      our solutions are creative and minimal time taking.

                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: "10px",
                background: "rgba(255,255,255,0.9)",

                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05) rotate(0deg)",
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
                },
                "&:hover .icon": {
                  transform: "rotateY(360deg)", // Flip animation
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <img
                    className="icon"
                    height="20%"
                    width="20%"
                    src="/images/budget.png"
                    alt="Cost Effective"
                    style={{
                      transition: "transform 0.6s ease", // Smooth flip animation
                    }}
                  />
                  <Box ml={3} mr={3}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                      Cost-Effectiveness
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      We will add worth to each penny you spend on your project. Providing cost-effective solutions is our main speciality.
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Third row of cards */}
          <Grid item xs={12} sm={5}>
            <Card
              sx={{

                boxShadow: 3,
                borderRadius: "10px",
                background: "rgba(255,255,255,0.9)",

                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05) rotate(0deg)",
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
                },
                "&:hover .icon": {
                  transform: "rotateY(360deg)", // Flip animation
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <img
                    className="icon"
                    height="20%"
                    width="20%"
                    src="/images/strategic.png"
                    alt="Strategic"
                    style={{
                      transition: "transform 0.6s ease", // Smooth flip animation
                    }}
                  />
                  <Box ml={3} mr={3}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                      Strategic Thinking
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      We have served different industries and developed unique solutions to meet their business expectations.
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Card
              sx={{

                boxShadow: 3,
                borderRadius: "10px",
                background: "rgba(255,255,255,0.9)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05) rotate(0deg)",
                  boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
                },
                "&:hover .icon": {
                  transform: "rotateY(360deg)", // Flip animation
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <img
                    className="icon"
                    height="20%"
                    width="20%"
                    src="/images/idea.png"
                    alt="idea"
                    style={{
                      transition: "transform 0.6s ease", // Smooth flip animation
                    }}
                  />
                  <Box ml={3} mr={3}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                      Out-of-the-Box Solutions
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Our thinking ability and dedication make us provide out-of-the-box IT & Web solutions so that you can leverage your business greatly.
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <hr />
      {/* Call-to-Action Section */}
      <Box sx={{ width: "90%", margin: "auto", padding: "4%" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            mb: 4,
            fontSize: { xs: "2rem", sm: "2rem", md: "3rem" }
          }}
        >
          Solutions Driven by Cutting-Edge Technologies.
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            mb: 4,
          }}
        >
          We collaborate with Our Professional Developers Focused on Diverse Tech Stack.
        </Typography>
        <SkillsCarousel />
      </Box>

      <hr />


      <Typography
        variant="h6"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
          mb: 2,
          mt:4,
          fontSize: { xs: "0.9em", sm: "1.2rem", md: "1.2rem" }
        }}
      >
        OUR BLOG UPDATE
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
          mb: 4,
          fontSize: { xs: "2rem", sm: "2rem", md: "3rem" }
        }}
      >
       Latest News

      </Typography>


      <Grid container spacing={2} alignItems={"center"} margin={"2% 1%"}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
            <Card sx={{
              height: '95%', boxShadow: 3,width:"90%",
              borderRadius: "10px",
              background:"rgba(255,255,255,0.9)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05) rotate(1deg)",
                boxShadow: "0 8px 20px rgba(255, 255, 255, 0.53)",
              }
              
            }}>
              {blog.image && (
                <CardMedia
                  component="img"
                  alt={blog.title}
                  height="160"
                  image={blog.image}
                  sx={{ objectFit: 'cover' }}
                />
              )}
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {formatSummary(blog.summary,60)}
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
        <Link to="/blogs" sx={{width:"auto"}}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "3% 4%",
            marginTop: "6%",
            marginLeft: "7%",
            textAlign:"center",
            width:"140px"
          }}
        >
          More blogs &rarr;
        </Button>
        </Link>
      </Grid>


      <hr />
      <Card
        sx={{
          
          padding: "2%",
          width:"85%",
          maxWidth: 400,
          margin: '3% auto',
          background: "linear-gradient(152deg, rgba(2,0,36,1) 0%, rgba(166,93,218,1) 1%, rgba(102,49,172,1) 47%, rgba(42,96,179,1) 100%, rgba(0,212,255,1) 100%)",
          color: 'white',
          borderRadius: 2,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Get in Touch
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Have a great suggestion or are you looking for a remotely focused team? Just get in touch with us.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            {/* Big Phone Icon on the left */}
            <PhoneIcon sx={{ fontSize: '2.5rem', color: 'white', mr: 2 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Toll Free Call
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                +91-8384017586
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            href="tel:+918384017586"
            sx={{
              backgroundColor: '#8b5cf6',
              '&:hover': { backgroundColor: '#6b46c1' },
              fontSize: "0.875rem", // To keep text size uniform
              padding: "6px 12px", // To make the button slightly bigger
              width: "100%", // Make button take full width
            }}
          >
            Call Now
          </Button>
        </CardContent>
      </Card>
      <hr />
    </Box>
  );
};

export default HomePage;
