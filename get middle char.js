//algorithm for returning the middle char from a word passed to the function
function getMiddle(string) {
    var startingSlice = (string.length) / 2;
    if (string.length % 2 == 0) {
        var endingSlice = (string.length) - startingSlice;
        let finalString = string.slice(startingSlice - 1, endingSlice + 1);
        return finalString;
    } else {
        var finalChar = Number(startingSlice);
        finalChar = Math.floor(finalChar);
        finalChar = string.charAt(finalChar);
        console.log(finalChar);
    }
}

getMiddle("testo");