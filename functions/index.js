const functions = require('firebase-functions');
// Make firebase functions availeble. These are installed in package.json
const admin = require('firebase-admin');

const nodemailer = require('nodemailer'); //nodemailer

const config = functions.config();

const cors = require('cors')({ origing: true });
// Complete set up, accessible with Node.js
admin.initializeApp();

// For gmail, you need 'turn on' for less secure app access for gmail setting
// secure important information in firebase environment variable
// firebase CLI command - 'firebase functions:config:set user.email="your_email" - then you can access config.user.email
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

// in termianl, firebase deploy  - this will launch our functins and host in google url

const mailOptions = {
  from: 'Arc Development',
  to: 'lunarbase@outlook.com',
  subject: 'Testing nodemailer',
  text: 'Test successful',
};

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send('Message sent successfully');
      }
    });
  });
});

// run firebase deply  (however you need to change to blaze plan for billing section to deploy)
