/* Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
    let newArr = []

    while (arr.length > 0) {
        newArr.push(arr.splice(0, size))
    }
    return newArr
  }
  
  console.log(
//   chunkArrayInGroups(["a", "b", "c", "d"], 2)
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
  )