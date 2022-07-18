/* Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 

*/

function translatePigLatin(str) {
    
    if (str.match(/^[aeiou]/)) return str + "way"
    
    const cons = str.match(/^[^aeiou]+/)[0]

    return str.substring(cons.length) + cons + "ay"
  }
  console.log(
  translatePigLatin("consonant"),
  translatePigLatin("algorithm"),
  translatePigLatin("california")
  )