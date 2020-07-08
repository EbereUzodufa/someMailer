console.log(process.env);
//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3000;
const emailKey = require("./key.json");

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

app.get("/", function (req, res) {
  res.send("hello world");
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came", req.body);
  let user = req.body;
  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({
        status: 400,
        error: "Failed to send email",
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

  // const gmail = {
  //   host: "smtp.sendgrid.net",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: "apikey",
  //     pass: "<password>"
  //   }
  // }

  // const mailtrapio = {
  //   host: "smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: "94b784b5970edf",
  //     pass: "01a5d515011f6e"
  //   }
  // };
  var user_var = process.env.user || emailKey.user;
  var pass_var = process.env.pass || emailKey.pass;

  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: user_var,
      pass: pass_var,
    },
  });

  const mailOptions = {
    from: `Tech Innovation and Solution (TIS), "info@techinnovationsandsolutions.com"`,
    to: `<${user.email}>`,
    subject: "Thank you for contacting Tech Innovation and Solution (TIS)",
    html: `
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
    <tbody><tr style="border-collapse:collapse"> 
     <td valign="top" style="padding:0;Margin:0"> 
      <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
        <tbody><tr style="border-collapse:collapse"> 
         <td class="es-info-area" align="center" style="padding:0;Margin:0"> 
          <table bgcolor="#FFFFFF" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> 
            <tbody><tr style="border-collapse:collapse"> 
             <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px"> 
              <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                <tbody><tr style="border-collapse:collapse"> 
                 <td align="center" valign="top" style="padding:0;Margin:0;width:560px"> 
                  <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    <tbody><tr style="border-collapse:collapse"> 
                     <td class="es-infoblock es-m-txt-c" align="center" style="padding:0;Margin:0;line-height:13px;font-size:11px;color:#CCCCCC"></td> 
                    </tr> 
                  </tbody></table></td> 
                </tr> 
              </tbody></table></td> 
            </tr> 
          </tbody></table></td> 
        </tr> 
      </tbody></table> 
      <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
        <tbody><tr style="border-collapse:collapse"> 
         <td align="center" style="padding:0;Margin:0"> 
          <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
            <tbody><tr style="border-collapse:collapse"> 
             <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center top;background-color:#FFFFFF" bgcolor="#ffffff" align="left"> 
              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                <tbody><tr style="border-collapse:collapse"> 
                 <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                  <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center bottom;background-color:transparent" width="100%" cellspacing="0" cellpadding="0" bgcolor="transparent" role="presentation"> 
                    <tbody><tr class="es-mobile-hidden" style="border-collapse:collapse"> 
                     <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="http://techinnovationandsolutions.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#2980D9"><img class="adapt-img" src="https://hryhme.stripocdn.email/content/guids/5619fa74-b7de-4d03-8326-c6ed8d415623/images/57631594192206293.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="56"></a></td> 
                    </tr> 
                    <tr style="border-collapse:collapse"> 
                     <td align="center" style="padding:20px;Margin:0;font-size:0"> 
                      <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                        <tbody><tr style="border-collapse:collapse"> 
                         <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px"></td> 
                        </tr> 
                      </tbody></table></td> 
                    </tr> 
                  </tbody></table></td> 
                </tr> 
              </tbody></table></td> 
            </tr> 
            <tr style="border-collapse:collapse"> 
             <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center bottom" align="left"> 
              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                <tbody><tr style="border-collapse:collapse"> 
                 <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                  <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    <tbody><tr style="border-collapse:collapse"> 
                     <td height="25" align="center" style="padding:0;Margin:0"></td> 
                    </tr> 
                  </tbody></table></td> 
                </tr> 
              </tbody></table></td> 
            </tr> 
            <tr style="border-collapse:collapse"> 
             <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-color:#FFFFFF" bgcolor="#fff" align="left"> 
              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                <tbody><tr style="border-collapse:collapse"> 
                 <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                  <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                    <tbody><tr style="border-collapse:collapse"> 
                     <td bgcolor="transparent" align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#2B3990; text-transformation: capitalize">Dear ${user.firstname} ${user.lastname},</h3></td> 
                    </tr> 
                    <tr style="border-collapse:collapse"> 
                     <td bgcolor="transparent" align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666">Thank you for contacting us. We will get back to you with 48 hours.</p></td> 
                    </tr> 
                    <tr style="border-collapse:collapse"> 
                     <td height="25" align="center" style="padding:0;Margin:0"></td> 
                    </tr> 
                    <tr style="border-collapse:collapse"> 
                     <td align="center" style="padding:20px;Margin:0;font-size:0"> 
                      <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                        <tbody><tr style="border-collapse:collapse"> 
                         <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px"></td> 
                        </tr> 
                      </tbody></table></td> 
                    </tr> 
                  </tbody></table></td> 
                </tr> 
              </tbody></table></td> 
            </tr> 
            <tr style="border-collapse:collapse"> 
             <td style="padding:0;Margin:0;background-position:center bottom" align="left"> 
              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                <tbody><tr style="border-collapse:collapse"> 
                 <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                  <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-position:center bottom;background-color:#FFFFFF;border-radius:0px 0px 5px 5px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                    <tbody><tr style="border-collapse:collapse"> 
                     <td class="made_with" align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&amp;utm_medium=email&amp;utm_campaign=business2&amp;utm_content=thank_you_for_the_meeting" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#2980D9"><img src="https://hryhme.stripocdn.email/content/guids/5619fa74-b7de-4d03-8326-c6ed8d415623/images/57631594192206293.png" alt="" width="125" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                    </tr> 
                    <tr style="border-collapse:collapse"> 
                     <td height="0" align="center" style="padding:0;Margin:0"></td> 
                    </tr> 
                  </tbody></table></td> 
                </tr> 
              </tbody></table></td> 
            </tr> 
          </tbody></table></td> 
        </tr> 
      </tbody></table> 
      <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
        <tbody><tr style="border-collapse:collapse"> 
         <td align="center" style="padding:0;Margin:0"> 
          <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="center"> 
            <tbody><tr style="border-collapse:collapse"> 
             <td style="Margin:0;padding-top:15px;padding-left:20px;padding-right:20px;padding-bottom:25px;background-color:transparent" bgcolor="transparent" align="left"> 
              <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]--> 
              <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                <tbody><tr style="border-collapse:collapse"> 
                 <td valign="top" align="center" style="padding:0;Margin:0;width:270px"> 
                  <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" width="100%" cellspacing="0" cellpadding="0" role="presentation"> 
                    <tbody><tr style="border-collapse:collapse"> 
                     <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:20px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:30px;color:#2B3990"><strong>Tech&nbsp;Innovation&nbsp;and&nbsp;Solution</strong></p><h2 style="Margin:0;line-height:17px;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;font-style:normal;font-weight:bold;color:#EC008C;background-color:#FFFFFF">Building Products That Serve Your Business Goals</h2></td> 
                    </tr> 
                  </tbody></table></td> 
                </tr> 
              </tbody></table> 
              <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]--> 
              <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                <tbody><tr style="border-collapse:collapse"> 
                 <td align="left" style="padding:0;Margin:0;width:270px"> 
                  <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" width="100%" cellspacing="0" cellpadding="0" role="presentation"> 
                    <tbody><tr style="border-collapse:collapse"> 
                     <td class="es-m-txt-c" align="right" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0px"> 
                      <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                        <tbody><tr style="border-collapse:collapse"> 
                         <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.facebook.com/TIS-112563863852456" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF"><img title="Facebook" src="https://hryhme.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://twitter.com/TISorganization" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF"><img title="Twitter" src="https://hryhme.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.instagram.com/techinnovationsandsolutions/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF"><img title="Instagram" src="https://hryhme.stripocdn.email/content/assets/img/social-icons/circle-colored/instagram-circle-colored.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                         <td valign="top" align="center" style="padding:0;Margin:0"><a target="_blank" href="https://linkedin.com/company/tech-innovations-and-solutions" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF"><img title="Linkedin" src="https://hryhme.stripocdn.email/content/assets/img/social-icons/circle-colored/linkedin-circle-colored.png" alt="In" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td> 
                        </tr> 
                      </tbody></table></td> 
                    </tr> 
                  </tbody></table></td> 
                </tr> 
              </tbody></table> 
              <!--[if mso]></td></tr></table><![endif]--></td> 
            </tr> 
          </tbody></table></td> 
        </tr> 
      </tbody></table></td> 
    </tr> 
  </tbody></table>
    `,
  };

  const toAdmin = {
    from: `<${user.email}>`,
    to: `Tech Innovation and Solution (TIS), "info@techinnovationsandsolutions.com"`,
    subject: "Contact On TIS Website",
    html: `
      <h1>The message is from ${user.firstname} ${user.lastname}</h1>
      <p>Email: ${user.email}</p>
      <p>Phone Number: ${user.phoneNumber}</p>
      <p>Message: ${user.msgBody}</p>
    `
  }

  transporter.sendMail(mailOptions, callback);
  transporter.sendMail(toAdmin, callback);
};
