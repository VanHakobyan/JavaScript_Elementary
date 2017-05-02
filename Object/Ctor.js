var obj = new Object();
obj.x = 5;
obj.y = 6;
document.write(obj.x + obj.y+"</br>");
obj.p = function () { document.write(obj.x + obj.y+"</br>") };
obj.p();
obj.x = 4;
obj.p();