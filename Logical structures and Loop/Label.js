document.write("Label on ");

Label: for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {


        if (j == 2) {
            break Label;
        }
        document.write(j);
    }
    document.write(i);
} 