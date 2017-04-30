var input = parseInt(prompt("input number: "));

function factorial(input)
{
    if (input <= 1)
    {
        return 1;
    }

    return input * factorial(input - 1);
}
document.write(factorial(input));
