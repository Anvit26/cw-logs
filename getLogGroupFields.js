// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config = new AWS.Config();
AWS.config.accessKeyId = "*";
AWS.config.secretAccessKey = "*";
AWS.config.region = "ap-south-1";

var cloudwatchlogs = new AWS.CloudWatchLogs({apiVersion: '2014-03-28'});

//getLogGroupFields     var params = {
          logGroupName: '/aws/lambda/EC2',  // required
          time: '1580342405'
        };
        cloudwatchlogs.getLogGroupFields(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
