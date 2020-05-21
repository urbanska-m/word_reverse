// reverse string
// javascript has .reverse() method but only works on arrays
// must first convert string to array

// function reverseString(string) {
//     let myArray = Array.from(string);
//     let arrayReversed = myArray.reverse();
//     // now need to convert it back into string
//     // let arrayToString = arrayReversed.join();
//     // returns a string but with commas

//     let arrayToString = arrayReversed.join("")

//     return arrayToString;
// }
// // doesn't work because reverses order of words


function reverseString() {
    const str = document.getElementById('stringInput').value;
    const validChars = /^[a-z ]+$/;
  if (!str.match(validChars)) {
    alert("Input must not include numbers, special characters, or uppercase letters.");
    return false;
  } 
    const separatedString = str.split(' ');
    // splits string into array of words
    // now can reverse each word

    const reversedArray = [];

    for (let i = 0; i < separatedString.length; i++) {
        let word = separatedString[i];
        let subArray = Array.from(word);
        let reversedWords = subArray.reverse();
        let joinedWords = reversedWords.join("");
        reversedArray.push(joinedWords + ' ');
    }

    let output = reversedArray.join("");
    document.getElementById('stringOutput').value = output;
}

document.getElementById('submit').addEventListener('click', reverseString);