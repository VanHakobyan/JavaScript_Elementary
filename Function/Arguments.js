function Func(a, b, c)
{
    var maxFunc = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < arguments.length; i++)
    {
        if (arguments[i] > maxFunc)
        {
            maxFunc = arguments[i];
        }
    }
    return maxFunc;
}
var res = Func(12, 1, 5, 4, 5, 8, 151, 678);
document.write(res); //678
