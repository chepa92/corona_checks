const _ = require("lodash");
const config = require("../configs/configs");
const aws = require("../helpers/awss3");

module.exports = {
  upload: (req, res) => {
    
    let folder = "good";
    
    if (req.body.id == null || req.body.id == 0){
      folder = "bad";
    } 

    aws
      .uploadToS3("korona-checks/", folder, req.body)
      .then(function (result) {
        console.info("Success! Uploaded to " + folder);
      });
    res.json("done");
  }
}