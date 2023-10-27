var http = require('http');
http.createServer(function(req,res){
    if(req.url == '/about')
        res.write('Hello '+req.url);
    else if(req.url == "/contact")
        res.write('Hello '+req.url);
    else
        res.write('Hello Home');

    res.end();
}).listen(1000);