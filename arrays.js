const favoriteNumber1 = 1;
const favoriteNumber2 = 4;
const favoriteNumber3 = 76;

// const favoriteNumbers = `${favoriteNumber1} ${favoriteNumber2} ${favoriteNumber3}`;

const favoriteNumbers = [favoriteNumber1, favoriteNumber2, favoriteNumber3, 5, 1, 324, 432,5 ,243, 534,6 ,34556 ,3,46,346];

// inserts an item to the end of the array
// favoriteNumbers.push(3, 9)
// inserts an item to the start of the array
// favoriteNumbers.unshift(0);

console.log(favoriteNumbers)

// pop takes out the last item from the array
// favoriteNumbers.pop();
// shift takes out the first item from the array
// favoriteNumbers.shift();

console.log(favoriteNumbers[favoriteNumbers.length - 1]);
console.log(favoriteNumbers.at(-1));
favoriteNumbers.reverse();

console.log(favoriteNumbers);
const arraySample = ['some text', 1, { text: 'abc', arr: [] }, () => {}, true, undefined, null];

