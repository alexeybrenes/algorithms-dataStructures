// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1:
// Using string reversal

function isPalindrome1(str) {
    return str.split('').reverse().join('') === str;
}

// Solution 2:
// using Array.prototype.every helper
// Not the best solution since the comparison happens twice more than needed

function isPalindrome2(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]; //Remember that Arrays are 0 indexed.
    });
}