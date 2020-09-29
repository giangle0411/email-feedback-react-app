// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const keys = require("./key");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(keys.sendGridKey);
const msg = {
  to: "ltrgng@gmail.com", // Change to your recipient
  from: "giangtle0411@gmail.com", // Change to your verified sender
  subject: "Ayyo Im sending this from sendgrid-test directory test.js file",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>It works!! AAAAND no API exposed, which is good!</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
