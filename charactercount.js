function countLetters(text) {
var noSpaces = text.split(" ").join("");
var letters = noSpaces.split('');
var letterCount = {};
// console.log(letterCount);
for (var i=0; i < letters.length; i++) {

  // console.log(letters[i]);
  // letterCount.push(letters[i]);
  if (letters[i] in letterCount) {
    letterCount[letters[i]]++;
  } else {
    letterCount[letters[i]] = 1;
  }


}

console.log(letterCount);
}

countLetters('lighthouse in the house');