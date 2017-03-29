var number = 4; //prompt("input number");
var current = number;
var factorial = 1;
while (current >= 0) {
    if (current == 0 || current == 1) {
        document.write("factorial(" + number + ")=" + factorial);
        break;
    }
    factorial *= current;
    current--;
}
