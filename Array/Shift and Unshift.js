
//shift
document.write("<b>shift</b>" + "<br>");
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write("array " + array + "<br>");
var value = array.shift();
document.write("new array " + array + "<br>");
document.write("deleted " + value + "<br>");

//unshift
document.write("<b>unShift</b> <br>");
var length = array.unshift(0);
document.write("new array " + array + "<br>");
document.write("deleted " + length + "<br>");
