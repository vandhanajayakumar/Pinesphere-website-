import fetch from 'node-fetch';
import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // or another email service provider
    auth: {
        user: 'vandhana.jayakumar1106@gmail.com', // your email address
        pass: 'eztq imlr qcxd yapm'   // your email password or app-specific password
    }
});

function sendEmailNotification() {
    const utcTimestamp = new Date().toISOString(); // Get the current UTC timestamp
    const localTimestamp = new Date().toLocaleString(); // Get the local time timestamp
    const serverUrl = 'http://127.0.0.1:3000/'; // URL of the server

    const mailOptions = {
        from: 'sanchanasrig112302@gmail.com',           // sender address
        to: 'vandhana.jayakumar1106@gmail.com',      // recipient address
        subject: 'Server Down Alert',           // email subject
        text: `
             The server at ${serverUrl} has stopped working.
            UTC Timestamp: ${utcTimestamp}
            Local Timestamp: ${localTimestamp}
            Please check immediately.
        ` // email body with timestamp and server URL
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error sending email:', error);
        }
        console.log('Email sent:', info.response);
    });
}

async function checkServer() {
    try {
        const response = await fetch('http://127.0.0.1:3000/');
        if (response.ok) {
            console.log('Server is running');
        } else {
            console.log('Server is not responding correctly');
            sendEmailNotification();
        }
    } catch (error) {
        console.log('Server stopped:', error.message);
        sendEmailNotification();
    }
}

checkServer();
