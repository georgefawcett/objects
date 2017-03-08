function getPositions(text) {
var characters = text.split('');

var letterPosition = {};

for (var i=0; i < characters.length; i++) {


  if (characters[i] != " " && characters[i] in letterPosition) {
     letterPosition[characters[i]].push(i);
  } else if (characters[i] != " ") {
     letterPosition[characters[i]] = [i];
  }


}

console.log(letterPosition);
}

getPositions('lighthouse in the house');