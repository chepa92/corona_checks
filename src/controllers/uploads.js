const _ = require("lodash");
const config = require("../configs/configs");
const aws = require("../helpers/awss3");

module.exports = {
  uploadAws: (req, res) => {
    if (!_.result(req.file, "key")) {
      return res.json("Invalid");
    } else {
      const dataFile = {
        file: req.file.key,
        url: config.AWS.endpoint + "/" + req.file.key,
      };
      console.log(dataFile);
      return res.json(dataFile);
    }
  },
  uploadCloudinary: (req, res) => {
    //place here a check for good/bad and change "good" to good/bad
    aws
      .uploadToS3("korona-checks/good", "good", req.body)
      .then(function (result) {
        console.info("Success! Uploaded");
      });
    res.json("done");
  },
  upload: (req, res) => {
    console.log("Hello world");
  },
};
