//algorithm for reversing a words in a string
function reverseWords(str) {
    let words = str.split(" ");
    let reversedWords = [];
    words.forEach(word => {
        let newWord = '';
        for (let i = word.length - 1; i >= 0; i--){
            console.log(word.charAt(i));
            newWord = newWord + word.charAt(i);
        }
        reversedWords.push(newWord);
    });
    return reversedWords.join(" ");
}

reverseWords('The quick brown fox jumps over the lazy dog.');