const { Module } = require("module");

var add = function(a,b){
    console.log(a+b);
}
var sub = function(a,b){
    console.log(a-b);
}

// Export Features of one file to another file
Module.export = {add,sub};