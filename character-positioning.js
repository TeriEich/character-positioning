var letterList = {};

  function findLetters (str) {
    var newStr = str.split(" ").join("").toLowerCase();
    var input = newStr.split("");

    for (i = 0; i < input.length; i++) {
      var letter = input[i];
      if (letter in letterList) {
        letterList[letter].push(input.indexOf(letter, i)); //find index and add
      } else {
        letterList[letter] = [input.indexOf(letter)];
      }
    }

  return letterList;
 }


//test lines:
console.log(findLetters("lighthouse in the House"));
// l i g h t h o u s e i  n  t  h  e  h  o  u  s  e
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19

//get string
//separate letters and make object keys
//count instances of each letter - key: amt
//add to object key value