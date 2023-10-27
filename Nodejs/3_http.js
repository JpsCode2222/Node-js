// Day 2
// require http
var http = require('http');

// create server
http.createServer(function(req,res)
{
    res.writeHead(200,{"content-type":"text/html"});
    
    for(var i=1; i<=10; i++)
    {
        // write in responce
        res.write(i+" ");
    }
    // end responce
    res.end();
// Add port using listen
}).listen(1000)