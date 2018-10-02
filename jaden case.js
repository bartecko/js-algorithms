//algorithm for capitalizing first letter for every word in a given string
function capitalize(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function jaden(str){
    let strArr = str.split(" ");
    const result = [];
    for (const word of strArr) {
        result.push(capitalize(word));
    }
    return result.join(" ");
}
jaden("How can mirrors be real if our eyes aren\'t real");