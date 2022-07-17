/* Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object. 


*/

function destroyer(arr) {
    const valuesToRemove = Array.from(arguments).slice(1) // set a new array from arguments and start in 2nd index
    return arr.filter(value => !valuesToRemove.includes(value)) // checks value not include in valuesToRemove
}

console.log(
    destroyer([1, 2, 3, 1, 2, 3], 2, 3),
    destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3),
    destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")
)