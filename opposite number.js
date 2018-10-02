//algorithm for opposite number
function opposite(number) {
    var finalNum;
    if (number>0) {
        finalNum = "-" + number;
        finalNum = Number(finalNum);
    }
    else if(number==0){
        finalNum = number;
    }
    else{
        finalNum = number.toString();
        finalNum = finalNum.slice(1);
        finalNum = Number(finalNum);
    }
    console.log(finalNum);
}
opposite(-5);