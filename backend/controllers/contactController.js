const nodemailer = require("nodemailer");

// POST handler for the contact form
exports.handleContactForm = async (req, res) => {
  const { name, email, description, budget, timeline } = req.body;

  if (!name || !email || !description) {
    return res.status(400).json({ error: "Name, email, and project description are required." });
  }

  try {
    // Configure the transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use another email provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Define the email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email address to receive inquiries
      subject: "New Project Inquiry",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Description:</strong></p>
        <p>${description}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond to the client
    res.status(200).json({ message: "Your inquiry has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send the inquiry. Please try again later." });
  }
};
