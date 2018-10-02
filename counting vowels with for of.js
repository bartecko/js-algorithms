//algorithm for count of a vowels (for of solution)
function getCount(str) {
    var vowelsCount = 0;
    var vowels = "aeiou";

    for (const char of str) {
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }
console.log(vowelsCount);
}
getCount("something");