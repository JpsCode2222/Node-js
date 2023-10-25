// require http module
var http = require('http');

// Create Server
http.createServer(function(req,res){
    res.write("Hello");
    // important responce end
    res.end();
}).listen(1000); // use port
// port 80 -> Xamp 