// Call back function
var add = function(){
    console.log("Adding");
    return "Done";
}

var num1 = 100;

// function call inside another function
function calc(a){
    console.log(a());
}

calc(function(){
    console.log("Adding");
    return "Done";
})


// function call
calc(add);