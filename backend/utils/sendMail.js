const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: process.env.SMPT_HOST,
      auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD,
      },
    })
  );

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions).catch((e) => {
    console.log(e);
    throw e;
  });
};

module.exports = sendMail;
