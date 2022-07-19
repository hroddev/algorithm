/* 
Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

TO DO
- created new array with the words of the str
- filtrated in the new array the argument before
- created a variable to validate if the word is uppercase

*/

function myReplace(str, before, after) {
    const srtArr = str.split(" ")
    const [wordToreplace] = srtArr.filter(item => item === before)
    const replacement = wordToreplace[0] === wordToreplace[0].toUpperCase()
        ? after[0].toUpperCase() + after.slice(1)
        : after[0].toLowerCase() + after.slice(1)
    
    return srtArr.map(item => (item === before ? replacement : item)).join(" ")

  }
  
  console.log(
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
)
