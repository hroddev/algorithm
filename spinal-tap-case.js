/* 
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. 
*/

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(
  //   spinalCase('This Is Spinal Tap')
//   spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
);
