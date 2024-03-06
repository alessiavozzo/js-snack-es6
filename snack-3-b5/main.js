
/**
 * reverse the word
 * @param {string} word 
 * @returns {string}
 */
function reverseWord(word) {
    return word.split("").reverse().join("")
}

console.log(reverseWord("ciao"));