// url module 
// decode all url
// url contain -> domain/path?query

var url = require('url');
// console.log(url);

var urldata = url.parse("https://domain.com/path?name=Jayad&mobile=8484848848",true);
// decode whole url
console.log(urldata);

// Check only pathname & query
console.log(urldata.pathname);
console.log(urldata.query);