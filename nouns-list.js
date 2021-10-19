let result ='';

const nouns = [
  "bush",
  "shovel",
  "cave",
  "mouth",
  "shell",
  "tear",
  "razor",
  "nest",
  "pad",
  "fear",
  "prize",
  "power",
  "pocket",
  "cane",
  "pump",
  "mask",
  "junk",
  "kiss",
  "photo",
  "shower",
  "slide",
  "freedom"
];


//const capitalized = function (s){
  //return s[0].toUpperCase() + s.slice(1);


nouns.forEach(function(handleItem){

  if (handleItem === nouns[nouns.length - 1]) {

    result = result + handleItem[0].toUpperCase() + handleItem.slice(1)+ '.';

  } else if (handleItem === nouns[nouns.length - 2]) {

    result = result + handleItem[0].toUpperCase() + handleItem.slice(1) + ' and ';

  } else {

    result = result + handleItem[0].toUpperCase() + handleItem.slice(1)+ ', ';

    }
  })
  


const output = document.querySelector('p')
output.textContent = `List of Nouns: ${result}`;



// 1. Create a function `handleItem()` that accepts the (JS-created) array `item` (the noun) as a parameter.

// 2. Inside `handleItem()`, use `.innerHTML` and the addition assignment operator (`+=`) (or another method of your choice) to create a comma-separated of nouns so that:
//    - the first character of each noun is capitalized;
//    - each noun is separated by a comma;
//    - the last noun is separated by the word `and`.


// 3. Finally, using `Array.forEach()`: invoke `handleItem()` for each item in the noun array to create your comma-separated list.