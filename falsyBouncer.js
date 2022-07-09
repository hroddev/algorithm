/* Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean. 

Steps to do:

- create new array empty
- iterate the array and valida if the value is falsy
    - insert the true value with .push the value into new array

*/

function bouncer(arr) {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) { newArr.push(arr[i])}
    }
    
    return newArr;
  }
  
  console.log(
    // bouncer([7, "ate", "", false, 9])
    // bouncer([false, null, 0, NaN, undefined, ""])
    // bouncer([null, NaN, 1, 2, undefined])
  )
