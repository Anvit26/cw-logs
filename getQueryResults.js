// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config = new AWS.Config();
AWS.config.accessKeyId = "*";
AWS.config.secretAccessKey = "*";
AWS.config.region = "ap-south-1";

var cloudwatchlogs = new AWS.CloudWatchLogs({apiVersion: '2014-03-28'});

//getQueryResults
  var params = {                               // required
    queryId: 'af1efa8e-6447-40e3-aee3-733d3b287d14'   
  };
    cloudwatchlogs.getQueryResults(params, function(err, data) {
       if (err) console.log(err, err.stack);                           // an error occurred
       else     console.log(data);console.log(data.results);           // successful response
        });

