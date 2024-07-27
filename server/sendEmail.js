const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text, attachments = []) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'opaferanmi01@gmail.com',
            pass: 'olom scey iyuu slqc',
        },
    });

    let mailOptions = {
        from: 'mywebsite@gmail.com',
        to,
        subject,
        text,
        attachments,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
