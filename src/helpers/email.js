var AWS = require("aws-sdk");

var AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
var AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: "eu-west-1",
}); // Create sendEmail params

let params = {
  Destination: {
    /* required */
    CcAddresses: [
      process.env.EMAIL,
      /* more items */
    ],
    ToAddresses: [
      process.env.EMAIL,
      /* more items */
    ],
  },
  Message: {
    /* required */
    Body: {
      /* required */
      Html: {
        Charset: "UTF-8",
        Data: "Your corona test :)",
      },
      Text: {
        Charset: "UTF-8",
        Data: "Your corona test :)",
      },
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Test email",
    },
  },
  Source: process.env.EMAIL,
  /* required */
  ReplyToAddresses: [
    process.env.EMAIL,
    /* more items */
  ],
}; // Create the promise and SES service object

module.exports = {
  sendmail: (folder) => {
    params.Message.Subject.Data = "You corona test is " + folder;
    new AWS.SES({
      apiVersion: "2010-12-01",
    })
      .sendEmail(params)
      .promise(); // Handle promise's fulfilled/rejected states
  },
};


