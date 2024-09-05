const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'f342dhruval@gmail.com',
        pass: 'xvga ncwv skdn grxl'
    }
});

function sendMail(to, subject, msg, html) {
    transporter.sendMail({
        from: 'f342dhruval@gmail.com',
        to: to,
        text: msg,
        subject: subject,
        html: html
    })
}

module.exports = { sendMail };
