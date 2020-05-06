const _ = require("lodash");
const aws = require("../helpers/awss3");
const email = require("../helpers/email");

module.exports = {
  upload: (req, res) => {
    
    let folder = "good";
    
    if (req.body.id == null || req.body.id == 0){
      folder = "bad";
    } 

    aws
      .uploadToS3("new-korona-checks/", folder, req.body)
      .then(function (result) {
        console.info("Success! Uploaded to " + folder);
        email.sendmail(folder);
      });
    res.json("done");
  }
}