function before(a) {
    var sum = 0;
    for (var i = 0; i < a; i++) {
        sum += i;
    }
    return sum;
};
var x = 6;// prompt("input number")
document.write("sum before(" + x + ")=" + before(x));

