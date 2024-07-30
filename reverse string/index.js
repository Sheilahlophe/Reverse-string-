// Function to reverse the input string
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

// Input string
let inputString = "Hello";

// Reversed string
let reversedString = reverseString(inputString);

// Printing the reversed string
console.log("Reversed string:", reversedString);
