module.exports={
    port:   8080,                   //port back end sends requests to
    s3: {
        accessKeyId:        '',		//enter aws access key
        secretAccessKey:    '',		//enter aws access key
        signatureVersion:   'v4',           //don't change
        region:             'ca-central-1'     //don't change
    },
    bucket: 'chaindata-digibyte',   //don't change
    life:   300                     //number of seconds to grant permission for
};
