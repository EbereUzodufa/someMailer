//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3000;

// create a new Express application instance 
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(PORT);

//start application server on port 3000
// app.listen(3000, () => {
//   console.log("The server started on port 3000");
// });

app.get('/', function (req, res) {
  res.send('hello world')
})

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came", req.body);
  let user = req.body.email;
  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ 
        status: 400,
        error: "Failed to send email" 
      });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
});

const sendMail = (user, callback) => {
  // let testAccount = await nodemailer.createTestAccount();
  // const ttestt = {
  //     host: "smtp.ethereal.email",
  //     port: 587,
  //     secure: false, // true for 465, false for other ports
  //     auth: {
  //     user: testAccount.user, // generated ethereal user
  //     pass: testAccount.pass, // generated ethereal password
  //     },
  // };

  const gmail = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "<sender email>",
      pass: "<password>"
    }
  }

  const mailtrapio = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "94b784b5970edf",
      pass: "01a5d515011f6e"
    }
  };

  const transporter = nodemailer.createTransport( {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "94b784b5970edf",
      pass: "01a5d515011f6e"
    }
  });

  const mailOptions = {
    from: `Tech Innovation and Solution (TIS), "<info@techinnovationsandsolutions.com>"`,
    to: `<${user.email}>`,
    subject: "<Message subject>",
    html: "<h1>And here is the place for HTML</h1>"
  };

  transporter.sendMail(mailOptions, callback);
}
