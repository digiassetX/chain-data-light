const config=require('./config');
const AWS = require('aws-sdk');
const s3 = new AWS.S3(config.s3);
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app_api = express();
app_api.use(bodyParser.urlencoded({ extended: false }));
app_api.use(bodyParser.json());
app_api.use(cors());
app_api.get('/key/:key',(req,res)=>{
    try {
        const url=s3.getSignedUrl('getObject', {
            Bucket: config.bucket,
            Key: req.params.key,
            Expires: config.life,
            RequestPayer: "requester",
        });
        res.status(200).json(url);
    } catch (error) {
        console.log(error);
    }
});
app_api.listen(config.port, () => console.log(`API Server running on port ${config.port}`));
