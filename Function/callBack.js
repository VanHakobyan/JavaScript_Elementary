var add = function (a, b) { return a + b };
var sub = function (a, b) { return a - b };

function show(calBackFunction, a, b)
{
    var resulit = callBackFunction(a, b);
    document.write("<P>" + resulit);
}
show(add, 10, 20);
show(sub, 10, 20);