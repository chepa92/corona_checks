const _ = require('lodash')
const config = require('../configs/configs')
var filePath = './path/to/selfie.jpg';
const aws = require('../helpers/awss3')

module.exports = {
  uploadAws: (req, res) => {
    if (!_.result(req.file, 'key')) {
      return res.json('Invalid')
    } else {
      const dataFile = {
        file: req.file.key,
        url: config.AWS.endpoint + '/' + req.file.key
      }
      console.log(dataFile)
      return res.json(dataFile)
    }
  },
  uploadCloudinary: (req, res) => {
    console.log('Hello world')
    aws.uploadToS3('my-bucket-name', 'my-picture-folder', filePath , res.body).then(function(result) {
      console.info('Success! Uploaded ' + filePath + ' to ' + result.Location);
  });
    res.json("done");
  },
  upload: (req, res) => {
    console.log('Hello world')
  }
}
