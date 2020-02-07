// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config = new AWS.Config();
AWS.config.accessKeyId = "*";
AWS.config.secretAccessKey = "*";
AWS.config.region = "ap-south-1";

var cloudwatchlogs = new AWS.CloudWatchLogs({apiVersion: '2014-03-28'});

var params = {
    endTime: '1580342405', 
    queryString: 'filter @type = "REPORT"| stats avg(@duration), max(@duration), min(@duration) by bin(5m)', 
    startTime: '1580149700', 
    limit: '20',
    logGroupName: '/aws/lambda/form',     ///aws/lambda/EC2
  };

  cloudwatchlogs.startQuery(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
    
    var que = data;
});
