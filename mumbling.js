//algorithm for logging a string that every letter is multiplyed more times, letter are joined with -
function accum(s) {
    var charArr = s.split("");
    let finalArr = [];
    for (let i = 0; i < charArr.length; i++) {
        let multi = i + 1;
        let element = charArr[i].toUpperCase() + charArr[i].repeat(multi).toLowerCase();
        finalArr.push(element);
    }
    console.log(finalArr.join("-"));
}

accum("ZpglnRxqenU");