First intall node from official site
use lts long term support
install node
in cmd check node version
node -v
npm -v

file name is like
first.js

to run the file in cmd
node first.js

after every change of code file
recompile code using cmd
node fileName.js

then refresh the browser
localhost:1000

to avoid recompilation we use nodemon package cmd
npm i -g nodemon

only once run code like cmd
nodemon fileName.js

<!-- Vs Shots -->

1] cnt + c -> back into terminal when program is running

2] alt + tab -> goto browser and code reapetedly

<!-- module learn -->

http
http.createServer(function(req,res){
res.write("hello");
res.end();
}).listen(1000);
req.url -> get data path from url /about

url
url.parse('url',true);
