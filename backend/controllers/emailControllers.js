const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other email services like 'hotmail', 'yahoo', etc.
    auth: {
      user: process.env.EMAIL_USER,  // Your email
      pass: process.env.EMAIL_PASS,   // Your email password or app password (if using Gmail)
    },
  });

  
    
exports.sendData=async (req, res) => {
    const { name, email, message } = req.body;
  
    // Email setup
    const mailOptions = {
      from: email, // User's email
      to:  process.env.EMAIL_USER, // Your email to receive messages
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        return res.status(500).json({ message: 'Error sending email', error });
      }
      res.status(200).json({ message: 'Email sent successfully', info });
    });
  };