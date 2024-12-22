import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { styled } from "@mui/system";

// Styled Component for the Background Section
const VideoBackground = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "60vh", // Set height of the section
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    height: "60vh", // Adjust the height for smaller screens
  },
}));

const Content = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center", // Center-align text for better look on mobile
  color: "#FFFFFF",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    top: "25%", // Adjust content positioning to remove extra margin
    left: "20%",
    transform: "translateX(-10%)",
  },
}));

function HomePageWithVideoBackground() {
  const theme = useTheme();  // Get the theme using useTheme hook

  return (
    <VideoBackground>
      {/* Video Background */}
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(1.5px)",
          webkitfilter: "blur(1.5px)",
        }}
      >
        <source src="videos/video-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <img src="images/waveform.gif" alt="" />

      {/* Content */}
      <Content>
        <Typography
          variant="h3"
          // className="glow"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            // textShadow: "1px 1px 10px #fff, 1px 1px 10px #ccc",
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.5rem", // Smaller font size on mobile
              marginBottom: 1, // Reduce margin on mobile
            },
          }}
        >
          Comprehensive IT Services and Innovative Web Solutions
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: 3,
            marginBottom: 4,
            // textShadow: "1px 1px 6px #fff, 1px 1px 5px #ccc",
            // WebkitTextStroke: "1px black",
            [theme.breakpoints.down("sm")]: {
              fontSize: "1rem", // Adjust font size for mobile
              marginTop: 1, // Adjust margin top for mobile
              marginBottom: 2, // Adjust margin bottom for mobile
            },
          }}
        >
          TechEonn is your trusted partner for cutting-edge IT services and
          tailored web solutions. Empower your business with innovative,
          industry-specific technologies designed to drive success and maximize
          potential.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "10px 20px",
            [theme.breakpoints.down("sm")]: {
              padding: "8px 16px", // Adjust button padding for mobile
            },
          }}
        >
          Get Started &rarr;
        </Button>
      </Content>
    </VideoBackground>
  );
}

export default HomePageWithVideoBackground;
