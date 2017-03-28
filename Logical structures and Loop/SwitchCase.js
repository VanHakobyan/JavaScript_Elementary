var day = prompt("input day: 1-2-3-4-5-6-7: ", "");

switch (day) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
        document.write("working day");
        break;
    case "6":
    case "7":
        {
            document.write("weekend");
        }
        break;
    default:
        {
            document.write("You entered a non-existent day of the week.");
        }
        break;
}

    
