module.exports={
    port:   8080,                   //port back end sends requests to
    s3: {
        accessKeyId:        '',		//enter aws access key
        secretAccessKey:    '',		//enter aws access key
        signatureVersion:   'v4',           //don't change
        region:             'us-east-2'     //don't change
    },
    bucket: 'chain-data-address',   //don't change
    life:   300                     //number of seconds to grant permission for
};