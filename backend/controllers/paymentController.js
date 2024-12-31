const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const Project = require('../models/projectModel'); // Import your Project model

// Razorpay Configuration
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Endpoint to create an order
exports.createOrder=async (req, res) => {
  try {
    const { amount, email, projectId } = req.body;
    console.log(projectId,amount,email)
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      receipt: `order_rcptid_${Date.now()}`,
    });

    res.status(200).json({ orderId: order.id, project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

// Endpoint to verify payment
exports.verifyPayment=async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, email, projectId } = req.body;

    console.log(razorpay_order_id, razorpay_payment_id, razorpay_signature, email, projectId )
    // Validate the Razorpay signature
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ error: 'Invalid payment signature' });
    }

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Generate a secure, time-limited download link (e.g., 24 hours)
    const downloadLink = `${project.fileUrl}`;

    // Send email with download link
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:  process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log(downloadLink);

    await transporter.sendMail({
      from:  process.env.EMAIL_USER,
      to: email,
      subject: 'TechEon - Your Project Download Link',
      text: `Thank you for your purchase! Here is your download link: ${downloadLink}`,
    });

    res.status(200).json({ success: true, downloadLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Payment verification failed' });
  }
};

