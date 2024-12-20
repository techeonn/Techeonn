import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

// Styled Component for the Background Section
const VideoBackground = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh", // Set height of the section
  overflow: "hidden",
}));

const Content = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#FFFFFF",
  zIndex: 1,

}));

function HomePageWithVideoBackground() {
  return (
    <VideoBackground>
      {/* Video Background */}
      <video
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
          webkitfilter: "blur(1.5px)"
        }}
      >
        <source
          src="videos/video-bg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <Content>
        <Typography variant="h3" className="glow" sx={{ fontWeight: "bold", marginBottom: 2,textShadow:"1px 1px 10px #fff, 1px 1px 10px #ccc",WebkitTextStroke:"3px black" }}>
          Welcome to TechEonn
        </Typography>
        <img src="images/full-logo.png" alt="" width={"100%"} height={"30%"} sx={{marginBottom:4,filter: "blur(1px)",webkitfilter: "blur(1px)"}}/>
        <Typography variant="h5" sx={{marginTop:3,marginBottom: 4,textShadow:"1px 1px 6px #fff, 1px 1px 5px #ccc",WebkitTextStroke:"1px black" }}>
          Explore the latest coding projects and insightful blogs.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "10px 20px",
          }}
        >
          Explore Projects
        </Button>
      </Content>
    </VideoBackground>
  );
}

export default HomePageWithVideoBackground;
