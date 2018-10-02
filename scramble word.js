function scramble(str1, str2) {
    let reg = /([a-z])\D/;
    /* if (str1)&&str2) {
        
    }
    RegExp() */
    let arr1 = str1.toLowerCase().split("");
    let arr2 = str2.toLowerCase().split("");
    let result = '';
    arr2.forEach(char => {
        if (arr1.includes(char)) {
            result += char;
        }
    });
    if (result === str2) {
        console.log(true);
    }
    else{
        console.log(false);
    }
}

scramble('katas','steak');