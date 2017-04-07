function res(x, z) {
    if (z == undefined) {
        z = 4;
    }
    return x * z;
}
var sum = res(5, 2);
var sum2 = res(8);// z=4;
document.write(sum + "<br>");
document.write(sum2 + "<br>");

