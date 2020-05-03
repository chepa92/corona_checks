"use strict";

var AWS = require("aws-sdk");

var config = require("../configs/configs");

var AWS_ACCESS_KEY_ID = config.awsAccessKeyId || process.env.AWS_ACCESS_KEY_ID;
var AWS_SECRET_ACCESS_KEY =
  config.awsSecretAccessKey || process.env.AWS_SECRET_ACCESS_KEY;

var s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

var fs = require("fs");
var path = require("path");

module.exports = {
  uploadToS3(bucketName, keyPrefix, filePath, body) {
    // ex: /path/to/my-picture.png becomes my-picture.png
    var fileName = path.basename(filePath);
    var fileStream = fs.createReadStream(filePath);

    // If you want to save to "my-bucket/{prefix}/{filename}"
    //                    ex: "my-bucket/my-pictures-folder/my-picture.png"
    var keyName = path.join(keyPrefix, fileName);

    return new Promise(function (resolve, reject) {
      fileStream.once("error", reject);
      s3.putObject({
        Bucket: bucketName,
        Key: filename,
        Body: JSON.stringify(body),
        ContentType: "application/json; charset=utf-8",
        ACL: "public-read",
        CacheControl: "max-age=60",
      })
        .promise()
        .then(resolve, reject);
    });
  },
};
