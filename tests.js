/*
1. Write a loop/cycle that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
3. Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. for example: range(1, 3) // [1, 2, 3]
Mention that first function should not mutate argument!
4. Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elemens
in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

const logTriangle = () => {
    for (let char = '#'; char.length <= 7; char += '#') {
        console.log(char);
    }
}
            //   1     3
const range = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i)
    }

    return result;
}

const reverseArray = (array) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.unshift(array[i]);
    }

    return result;
}

// [1, 2, 3] -> [3, 2, 3]
// [1, 2, 3, 4] -> [4, 3, 2, 1]
// [1, 2, 3, 4, 5, 6] -> [6, 5, 4, 3, 2, 1]

const reverseArrayInPlace = (array) => {
    let currentIteratedValue;
    // [1, 2, 3, 4]
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        // array[1] -> 2
        currentIteratedValue = array[i];
        // array[4 - 1 - 1] -> array[2] -> 3
        const switchWith = array[array.length - 1 - i];
        // array[1] = 3
        array[i] = switchWith
        // array[array.length - 1 - i] -> array[4 - 1 - 1] -> array[2] = 2
        array[array.length - 1 - i] = currentIteratedValue;
    }
}

const arrayToBeModified = range(1, 100); // [99, 3, 5]
reverseArrayInPlace1(arrayToBeModified);

console.log(arrayToBeModified);
