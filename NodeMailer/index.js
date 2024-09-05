const express = require('express');
const mongoose = require('mongoose');
const { sendMail } = require('./Confing/email_confing');
const { OTP_DATA } = require('./Confing/email_Temps');

const app = express();
app.use(express.json());

app.post('/email', (req, res) => {
    const to = req.body["email"];

    let subject = OTP_DATA["OTP_SUBJECT"];
    let msg = OTP_DATA["OTP_TEXT"];
    let html_1 = OTP_DATA["OTP_HTML_1"];
    let html_2 = OTP_DATA["OTP_HTML_2"];

    // generating otp in 4 digit ya 6 digit this logic give us
    let otp = Math.round(Math.random() * 1000000);
    let html = `${html_1} ${otp} ${html_2}`;

    sendMail(to, subject, msg, html);
    res.json({
        msg: "OTP sent",
    });
});

app.listen(8000, () => {
    mongoose.connect('mongodb://localhost:27017/NordMailer')

    console.log("Server is running on port 8000");
});
