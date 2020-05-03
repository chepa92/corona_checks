require('dotenv/config')

module.exports = {
  port: process.env.PORT,
  AWS: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
    region: process.env.AWS_S3_REGION,
    bucket: process.env.AWS_S3_BUCKET,
    endpoint: process.env.AWS_S3_ENDPOINT
  },
  jwtSecret: process.env.JWT_KEY,
  headerSecret: process.env.HEADERS_SECRET
}
