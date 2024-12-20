require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const projectRoutes = require('./routes/projectRoutes');
const blogRoutes = require('./routes/blogRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const { sendData } = require('./controllers/emailControllers');
const { handleContactForm } = require('./controllers/contactController');

const app = express();
app.use(express.json());


// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/payments', paymentRoutes);
app.post('/send-email', sendData);


app.post("/api/contact", handleContactForm);
  
// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
