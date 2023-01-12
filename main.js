const createLineSeperator = (taskNum) => {
    console.log(`--------------TASK ${taskNum}--------------`)
}

/*
1. Write a function which accepts an argument and returns the type. Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
2. Write a function that accepts a number as a parameter and check the number is prime or not. Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
3. Write a function that will accept two strings and will convert first argument to a currency requested in second argument:
	a. First argument will be currency that needs to be converted. for example: '$10'
	b. Second argument will be currency that first argument needs to be converted to. For example: 'dollars', 'euros'
   Constraints: 
	a. Lets assume the first letter in the first argument will always start with currency prefix ($, €)
	b. Function should only convert euros to dollars and vice-versa
	c. Use these conversion rates:
		i. €1 = $1.05
		ii. $1 = €0.95
4. Write a function that accepts an argument that is a function and invokes it. Passed function should log in the console 'Hello'.
5. Write a function that converts Fahrenheit to Celcius. Note: formula for convertion: (x - 32) * 0.5556.
6. Write a function that calculates area of a given rectangle. Note: formula for calculation: x*y.
7. Write a function to find the area and perimeter of a circle. Note: formula for perimeter (x stands for radius( apskritimo spindulys ) and π stands for Pi): 2 * π * x. formula for area: π * x * x.
   Constraints:
	a. It should return a string in this format: 'Circle of radius 10 has permiter of 62.83 and area of 314.15'
8. Write a function that takes two arguments and generates a random number in between them. For example: getRandomNumber(1, 10) should return me a number that is between 1 and 10.

BONUS: Write a function to find factorial of a number. Note factorial number formula (if x = 1 or x = 0, then its factorial is 1): x * (x - 1) * (x - 2) * ... 
	Example case result: getFactorial(5) should return 120 because 5 * (5 - 1) * (5 - 2) * (5 - 3) * (5 - 4) = 120
	Some material to get accustomed with factorials:
		a. English version ( https://en.wikipedia.org/wiki/Factorial )
		b. Lithuanian version ( https://lt.wikipedia.org/wiki/Faktorialas )
		
	Tips: just like in math you will have to use recursive functions to calculate factorial. If you need you can read more about it in here https://www.javascripttutorial.net/javascript-recursive-function/
*/


createLineSeperator(1)
const getTypeOfValue = (value) => {
    return typeof value;
}

console.log(getTypeOfValue(() => {}));

createLineSeperator(2);

// prime number is number that is only divided by 1 and itself without any remainder e.g. 7.

const chechIsPrime = (number) => {
    const testNumber = (x) => {
        if (x === 1) {
            return false;
        }
    
        if (x === 2) {
            return true;
        }
    
        if (number % (x - 1) === 0) {
            return false;
        }
    
        return testNumber(x - 1);
    }

    return testNumber(number);
}

console.log(chechIsPrime(3));

createLineSeperator(3);
/*
	c. Use these conversion rates:
		i. €1 = $1.05
		ii. $1 = €0.95
*/

const currencySymbolMap = {
    $: 'dollars',
    '€': 'euros',
};

//                           $10,        euros || dollars
const convertCurrency = (valueToConvert, convertTo) => {
    const currencySymbol = valueToConvert.at(0); // $
    const convertedSymbolToCurrency = currencySymbolMap[currencySymbol]; // dollars
    const currencyValue = valueToConvert.substring(1); // 10

    if (convertedSymbolToCurrency === convertTo) {
        return valueToConvert;
    }

    // ternary operator:
    // boolean ? if boolean is true : if boolean is false;

    //                                      if true do this          if false do this
    return convertTo === 'dollars' ? `$${currencyValue * 1.05}` : `€${currencyValue * 0.95}`;

    // is the same as ternary operator in line 92
    if (convertTo === 'dollars') {
        return `$${currencyValue * 1.05}`;
    }

    if (convertTo === 'euros') {
        return `€${currencyValue * 0.95}`;
    }
}

console.log(convertCurrency('$10', 'euros'));

createLineSeperator(4);

// Function that takes a function as an argument or returns a function is called higher order function
const startEngine = (onSuccess, onFail) => {
    // do the logic of starting up
    const engineStarted = false;

    engineStarted ? onSuccess() : onFail();
}

const onSuccess = () => {
    console.log('Engine started.')
}

const onEngineStarted = () => {
    console.log('Engine has started.');
}

const onFail = () => {
    console.log('Engine failed to start.')
}

startEngine(onEngineStarted, onFail);

createLineSeperator(5);
// (x - 32) * 0.5556.
const convertFahrenheitToCelcius = (fahrenheit) => {
    return Math.floor((fahrenheit - 32) * 0.5556);
}

console.log(convertFahrenheitToCelcius(50))

createLineSeperator(6);

const getAreaOfRectangle = (x, y) => {
    return x*y;
}

console.log(getAreaOfRectangle(2, 2));

createLineSeperator(7);
// 2 * π * x. formula for area: π * x * x.
// 'Circle of radius 10 has permiter of 62.83 and area of 314.15'
const getCircleAreaAndPerimeter = (radius) => {
    const perimeter = Math.floor((2 * Math.PI * radius) * 100) / 100;
    const area = Math.floor((Math.PI * Math.pow(radius, 2)) * 100) / 100;

    return `Circle of radius ${radius} has perimiter of ${perimeter} and area of ${area}`;
}

console.log(getCircleAreaAndPerimeter(10));


createLineSeperator(8);

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * max + min)
};

console.log(getRandomNumber(1, 4))

/*
    min = 1; max = 4;
    math.random -> 0.5   // 0 - 0.999

    How to set minimum value:
    Math.Random() + min // 1 - 1.9999

    How to set maximum value:
    Math.Random() * max;

    How to set maximum value inclusive:
    Math.ceil(Math.Random() * max);

    How to set min and max values where both of them are inclusive:
    Math.floor(Math.Random() * max + min)


    return 1...4;
*/
createLineSeperator('BONUS');

// getFactorial(5) -> 120, because 5 * 4 * 3 * 2 = 120
const getFactorial = (number) => {
    if (number <= 1) {
        return 1;
    }

    return number * getFactorial(number - 1);
}

console.log(getFactorial(6));

/*
    Cycle 1:
    5 * getFactorial(5 - 1) -> 5 * 4 * 3 * 2 * 1
    Cycle 2:
    4 * getFactorial(4 - 1) -> 4 * 3 * 2 * 1
    Cycle 3:
    3 * getFactorial(3 - 1) -> 3 * 2 * 1
    Cycle 4:
    2 * getFactorial(2 - 1) -> 2 * 1
    Cycle 5:
    return 1

*/