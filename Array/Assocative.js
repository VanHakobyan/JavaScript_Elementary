var arrayAss = { name: "Van", age: 21, objective: "developer" };
var key = prompt("input - name,age or objective");
document.write("Her " + key + " is " + arrayAss[key]);
document.write("<br>");
document.write(arrayAss.age + " " + arrayAss["name"] + " " + arrayAss.objective);