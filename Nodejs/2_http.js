// require http module
var http = require('http');

// Create Server
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("<h1>Hello</h1>");
    res.write("<input type='text'>")
    // important responce end
    res.end();
}).listen(1000); // use port
// port 80 -> Xamp 