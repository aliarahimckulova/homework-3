
function printWindowValues(window) {
    console.log(window);
}


function expTen(x){
    var result = 1;
    for(var i = 0; i < 10; i++)
    {
        result = result * x;
    }
    return(result);
}
console.log(expTen(6));


function getFuncRes(func, string) {
    return func(string);
}

getFuncRes(console.log, "Hello World")


