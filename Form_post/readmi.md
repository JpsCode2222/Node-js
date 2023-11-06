<!-- cmd -->

npm i express
npm i ejs

<!-- use middleware if using post method -->

var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
