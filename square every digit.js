//algorithm for squaring every digit in a passed number
function squareDigits(num) {
    var num = num.toString();
    const oldArr = num.split("");
    let newArr = [];
    oldArr.forEach(num => {
        num = Number(num);
        oldArr.push(num);
        if (oldArr.typeof !== Number) {
            num = num * num;
            newArr.push(num);
        }
    });
    let resultString = newArr.join("");
    let result = Number(resultString);
    return result;
}

squareDigits(32);