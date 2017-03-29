var matrix = Array(8);
for (var i = 0; i < 8; i++) {
    matrix[i] = new Array(8);
}
for (var i = 0; i < matrix.length; i++)
{
    for (var j = 0; j < matrix[i].length; j++)
    {
        if ((i + j) % 2 == 1)
        {
            matrix[i][j] = "<img src='images/parquet1.jpg' width='50' height='50'>";
        }
        else
        {
            matrix[i][j] = "<img src='images/parquet2.jpg' width='50' heigth='50'>";
        }
    }
}

matrix[2][1] = "<img src='images/parquet3.jpg' width='50' heigth='50'>";
for (var i = 0; i < matrix.length; i++)
{
    for (var j = 0; j < matrix[i].length; j++)
    {
        document.write(matrix[i][j]+" ");
    }
    document.write("<br/>");
}
