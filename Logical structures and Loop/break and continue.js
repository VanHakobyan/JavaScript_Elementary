var count = 7;
document.write("Continue and break" + "<br>");
while (count > 0) {
    
    if (count == 4) {
        count--;
        continue;
    }
    if (count == 2) {
        break;
    }
    document.write(count + ",");
    count--;
}
