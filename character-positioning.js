var letterList = {};

  function findLetters (str) {
    var newStr = str.split(" ").join("").toLowerCase();
    var input = newStr.split("");

    for (i = 0; i < input.length; i++) {
      var letter = input[i];
      if (letter in letterList) {
        letterList[letter].push(input.indexOf(letter, i));
      } else {
        letterList[letter] = [input.indexOf(letter)];
      }
    }

  return letterList;
 }


//test lines:
console.log(findLetters("lighthouse in the House"));