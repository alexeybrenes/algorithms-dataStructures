// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1:
// Using the Array.prototype.reverse helper

function reverseString1(str) {
    return str
        .split('') // Transform the String into Array
        .reverse() // Reverse the Array using the Array.prototype.reverse helper
        .join(''); // Transform the Array into String
}

// Solution 2:
// Using for loop

function reverseString2(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed; // Take the first character of the str and place it first in the 'reversed' string
    }
    return reversed;
}

// Solution 3:
// Using reduce helper

function reverseString3(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}



