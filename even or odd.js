//algorithm for checking if a number is even or odd
function even_or_odd(number) {
    if (Number.isInteger(number) == false) {
        alert("Pass integer");
    }
    if (number%2 == 0) {
        return "Even";
    }
    else return "Odd";
}