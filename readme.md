# chain-data-light
Very light chain data access system.  Almost no cpu power or bandwidth is needed by your system.  Your server only authorizes the request and the data is pulled from Amazons Servers.

To install copy files to a folder on your server and run 

    npm install
    
in config.js set your Amazon AWS access keys, port number you wish to use and access life of each request.  Default is 300 seconds

The front folder contains a very basic front end example that writes block 200's data to the console. you can use

    getKey(blockNumber).then((data)=>func); //get a blocks data by height
    getKey(blockHash).then((data)=>func);   //get a blocks data by hash
    getKey(txid).then((data)=>func);        //get a transactions data
    getKey(address).then((data)=>func);     //get an addresses data
    
  