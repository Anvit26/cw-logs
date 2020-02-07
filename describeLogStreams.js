// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config = new AWS.Config();
AWS.config.accessKeyId = "*";
AWS.config.secretAccessKey = "*";
AWS.config.region = "ap-south-1";

var cloudwatchlogs = new AWS.CloudWatchLogs({apiVersion: '2014-03-28'});

//describeLogStreams
  var params = {
        logGroupName: '/aws/lambda/form', // required 
        descending: true || false,
        limit: '20',
        logStreamNamePrefix: '2020/02/03/[$LATEST]f87a1d0cdde041629cd54daff5c4f369',
        nextToken: null
    };    
      cloudwatchlogs.describeLogStreams(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });
