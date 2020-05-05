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

module.exports = {
  uploadToS3(bucketName, folder, body) {

    var keyName = body.id +body.firstName + body.lastName + ".json";

    return new Promise(function (resolve, reject) {
      s3.putObject({
        Bucket: bucketName+folder,
        Key: keyName,
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
