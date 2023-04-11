const AWS = require('aws-sdk');

AWS.config.update({ region: 'EU (Stockholm)' }); // Replace YOUR_AWS_REGION with your AWS region

const ses = new AWS.SES();

const params = {
  Destination: {
    ToAddresses: ['hennynairobi@gmail.com'], // Replace YOUR_GMAIL_ADDRESS with your Gmail address
  },
  Message: {
    Body: {
      Html: {
        Charset: 'UTF-8',
        Data: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`,
      },
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'New Contact Form Submission',
    },
  },
  Source: 'hennynairobi@gmail.com', // Replace YOUR_SES_VERIFIED_EMAIL_ADDRESS with your SES verified email address
};

const sendEmail = async (name, email, message) => {
  try {
    await ses.sendEmail(params).promise();
    console.log('Email sent successfully');
  } catch (error) {
    console.log('Error sending email', error);
  }
};

export default sendEmail;
