import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import BlogsPage from "./pages/BlogsPage";
import BlogPostDetails from "./pages/BlogDetails";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
// import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatbotComponent from "./components/ChatBotComponent.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import { Box } from "@mui/material";

import { Analytics } from "@vercel/analytics/react"

const App = () => {
  
  return (
    <Box overflow={"hidden"} width={"100vw"}>
      <Router>
      {/* Navbar - Always Visible */}
      <Navbar />

      {/* Main Content */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Projects Pages */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />

        {/* Blogs Pages */}
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogPostDetails />} />

        {/* About and Contact Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />

        {/* 404 Page */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>

      {/* Footer - Always Visible */}
      {/* <ChatbotComponent/> */}
      <Footer />
    </Router>
    <Analytics/>
    </Box>
    
  );
};

export default App;
