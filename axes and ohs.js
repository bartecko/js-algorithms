function XO(str) {
    let axes = 0;
    let ohs = 0;
    const strArr = str.split("");
    strArr.forEach(char => {
        if (char == 'x' || char == 'X') {
            axes++;
        }
        if (char == 'o' || char == 'O') {
            ohs++;
        }
    });
    if (axes == ohs || (axes === 0 && ohs === 0)) {
        return true;
    }
    else {
        return false;
    }
}

XO('xxxm');