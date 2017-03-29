var array = Array(5);
array[0] = 0;
array[1] = 1;
array[2] = 4;
array[3] = 9;
array[4] = 16;
document.write(array);
document.write("<br>");
document.write("length array " + array.length+"<br>");//length array
array.length = 8;
array[6] = "yes";
array[7] = true;
document.write(array);//new output
array.length = 2;//minimization
document.write("<br>"+"Loop ");
for (var i = 0; i < array.length; i++) {
    document.write(array[i]+",");
}
document.write("<br>");
var arr = [111, 222, 333];
arr[7] = 777;
for (var i = 0; i < 9; i++) {
    document.write(arr[i] + ",");
}
