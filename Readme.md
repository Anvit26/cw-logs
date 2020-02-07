# cw-logs (using step function raw)
1)Start Query 
  param:{ startTime, endTime, queryString, limit, logGroupName}
  output:{ QueryID}
2)get query result
   param:{ QueryID}
   output:{ details of files scanned}
3)get log group fields
   param:{ startTime, endTime}
   output:{ LogGroupFieldId}
4)describe log stream
   param:{ LogGroupName, Limit, LogStreamNamePrefix, nextToken, LogRecordPointer} [Not able toFound: LogRecordPointer]
   output:{ LogGroupFieldId}
5)get log record (parse the output for error)
