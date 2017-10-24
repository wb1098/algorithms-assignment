console.clear();
console.log('\n=-=-=-=-=-=- coding challenges =-=-=-=-=-=-');
console.log('\Z - Starting Processing - Z\n');



//1. Write a function which takes an array of numbers, and returns the largest number in that array.

var nums = [1200, 0, 54, 2135, 3];
var sortedNumArray = nums.sort((a, b) => {
    return a - b;
});

//console.log(nums);

//====================================  #2  ======================================================
/*
//2. Write a function which, given a year as a number, returns whether that number is a leap year.

// 2000 -> true
// 1900 -> false
// 2016 -> true
*/
function findLeapYears(startingYear, endingYear) {
    for (var i = startingYear; i < endingYear; i++) {
        if (i % 100 === 0) {
            if (i % 400 === 0) {
                console.log('the year ' + i + ' is a leap year');
            }
        } else if (i % 4 === 0) {
            console.log('the year ' + i + ' is a leap year');
        }

    }

    return;
}

//findLeapYears(1888, 2017);

//====================================  #3  ======================================================

/*
3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
[1,2,5] -> 3
[1,2,3,4,5] -> 6
[3,4,5] -> 1
*/

//input = array of numbers  : output = the first integer missing from the array
function findFirstMissingNumber(numberArray) {
    var result = null;
    numberArray.sort();


    for (var i = 1; i < numberArray[numberArray.length - 1]; i++) {
        if (!numberArray.includes(i)) {
            result = i;
            return result;
        }
    }

    if (result === null) {
        result = numberArray[numberArray.length - 1] + 1;
    }

    return (result);
}

//uncomment to run function
//console.log(
//    'Results: ',
//    findFirstMissingNumber([1, 2, 5]),
//    findFirstMissingNumber([1, 2, 3, 4, 5]),
//    findFirstMissingNumber([3, 4, 5]),
//    findFirstMissingNumber([1, 2, 3, 4, 5, 6, 7, 9]),
//    findFirstMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])
//
//);

//===========================================  #4  ===============================================

/*
4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
[1,1,2,3,1,2,3] -> [1,2,3]
[1,4,4,4,2,2,4,4,4] -> [1,4,2]*/


function findDuplicateNumbers(numbers) {
    var result = [];

    result = numbers.filter(function (element) {
        if (!result.includes(element)) {
            return (element);
        }
    });
    return (result);
}


//console.log(
//    findDuplicateNumbers([1, 1, 2, 3, 1, 2, 3]),
//    findDuplicateNumbers([1, 4, 4, 4, 2, 2, 4, 4, 4])
//
//);

//====================================  #5  ======================================================

/*
5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".

"The quick brown fox" -> "Hetay uickqay rownbay oxfay".*/

const removePunctionFromEnd = function (sentence) {
    var punction = sentence.charCodeAt(sentence.length - 1);
    if (punction < 65 || punction > 122) {
        return (sentence.slice(0, sentence.length - 1));
    }
    return (sentence);

}

const removeLastTwoChar = function (word) {
    return (word.slice(0, word.length - 2));
}

const moveLastCharToFirstCharacter = function (word) {
    return (word.substr(word.length - 1) + word.substr(0, word.length - 1).toLowerCase());
}

const moveFirstChartoLastCharacter = function (word) {
    return (word.substr(1) + word.substr(0, 1));
}

const addAYToWord = function (word) {
    return (word + 'ay');
}

const capitalizeFirstLetter = function (word) {
    return (word.substr(0, 1).toUpperCase() + word.substr(1));
}

const convertWordsToPigLatin = function (sentence) {
    var resultsArray = [];
    var workArray = [];

    sentence = removePunctionFromEnd(sentence);

    workArray = sentence.toLowerCase().split(' ');

    resultsArray = workArray.map(function (element, index) {
        if (index === 0) {
            return capitalizeFirstLetter(addAYToWord(moveFirstChartoLastCharacter(element)));

        } else {
            return addAYToWord(moveFirstChartoLastCharacter(element));
        }
    });

    console.log(resultsArray.join(' ') + '!');
}

const convertWordsBackFromPigLatin = function (sentence) {
    var result = [];
    var workArr = [];

    sentence = removePunctionFromEnd(sentence);

    workArr = sentence.toLowerCase().split(' ');

    result = workArr.map(function (element, index) {
        if (index === 0) {
            return (capitalizeFirstLetter(moveLastCharToFirstCharacter(removeLastTwoChar(element))));
        } else {

            return (moveLastCharToFirstCharacter(removeLastTwoChar(element)));
        }
    });

    return (result.join(' ') + '!');
};

var testPigLatinConversion = function () {

    console.log(moveFirstChartoLastCharacter('Rulz'));
    console.log(addAYToWord('dog'));
    console.log(removeLastTwoChar('dddrt'))
    console.log(moveLastCharToFirstCharacter('adeW'));
    console.log(capitalizeFirstLetter('wade'));
    console.log(removePunctionFromEnd('Howdy!'));
    convertWordsToPigLatin('The quick brown fox');
    convertWordsToPigLatin('A small quick rabbit runs sideways');
    console.log(convertWordsBackFromPigLatin('Hetay uickqay rownbay oxfay!'))
    console.log(convertWordsBackFromPigLatin('Aay mallsay uickqay abbitray unsray idewayssay!'))
}

//testPigLatinConversion();

//========================================  #6  ==================================================

/* Write a function which takes in two arrays and determines if they contain the same number of the same values.
[], [] -> true
[2, 3, 4], [1, 2, 3] -> false
["a", "c", "b"], ["a", "b", "c"] -> true
[1, 1, 1], [1, 1, 1, 1] -> false
*/

function assertEqual(arrayOne, arrayTwo) {
    //Solution One
    /*
        arrayOne = JSON.stringify(arrayOne.sort());
        arrayTwo = JSON.stringify(arrayTwo.sort());

        if (arrayOne === arrayTwo) {
            console.log(`Passed -- ArrayOne:${arrayOne} MATCHES ArrayTwo:${arrayTwo}!`);
        } else {
            console.log(`Failed -- ArrayOne:${arrayOne} does not match ArrayTwo:${arrayTwo}!`);
        }
        */

    //Solution Two
    if (arrayOne.length === arrayTwo.length) {
        arrayOne.sort();
        arrayTwo.sort();

        //arrayOne is primary array
        if (arrayOne.every(function (arrOneElement, i) {
                return ((typeof arrOneElement === typeof arrayTwo[i]) && (arrOneElement === arrayTwo[i]));
            })) {
            console.log(' ArrayOne [' + arrayOne + '] and ArrayTwo [' + arrayTwo + '] - MATCH!');
            return;
        } else {
            console.log('No Matching Here - ArrayOne : [' + arrayOne + '] does not match ArrayTwo : [' + arrayTwo + ']');
            return;
        }

    } else {
        console.log(' Length does not match - ArrayOne : [' + arrayOne + '] does not match ArrayTwo : [' + arrayTwo + ']');
        return;
    }
}

function testAssertEqual() {
    assertEqual([], []); // pass
    assertEqual([2, 3, 4], [1, 2, 3]); // fail
    assertEqual([2, 3, 4], [2, 3, 4]); // pass
    assertEqual([1, 1, 1], [1, 1, 1, 1]); //fail
    assertEqual([2, 2, 2], [2, 2, 2]); // pass
    assertEqual(["a", "c", "b"], ["a", "d", "c"]); //fail
    assertEqual(["a", "c", "b"], ["a", "b", "c"]); //pass

    assertEqual(["a", "B", "c"], ["a", "B", "C"]); //fail
    assertEqual(["a", "B", "c"], ["a", "B", "c"]); //pass
    assertEqual(["a", "b", "c"], ["a", "B", "c"]); //pass
    assertEqual(["a", "B", "c"], ["a", 5, "c"]); // fail 
    assertEqual(["a", 5, "c"], ["a", 5, "c"]); // pass
    assertEqual([true], [false]); //fail
    assertEqual([true], [true]); // pass
}

//uncomment to test assert equal
//testAssertEqual();


//========================================  #7  ==================================================

/*
7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
[1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
[1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]
*/

var makeCutOffArray = function (numbers, cutOff) {
    var result = [];
    numbers.forEach(function (element) {
        if (element <= cutOff) {
            result.push(element);
        } else {
            result.push(cutOff);
        }
    });

    return (result);
}

//console.log(makeCutOffArray([1, 2, 3, 4, 5, 6, 7, 8], 4)); // [1,2,3,4,4,4,4,4]
//console.log(makeCutOffArray([1, 5, 7, 3, 1, 5, 7], 3)); // [1,3,3,3,1,3,3]


//========================================  #8  ==================================================

/*
8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.

-> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
-> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)
*/

var tenRandomNumbers = function () {
    var result = [];
    var maybeNumber = 0;

    while (result.length < 10) {
        maybeNumber = getRandomInteger(1, 100);
        if (result.indexOf(maybeNumber) === -1) {
            result.push(maybeNumber);
        }
    }
    return result;
};

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(tenRandomNumbers());


//========================================  #9  ==================================================
/*
9. Write a function which takes two sorted lists and merges them into a new sorted list.

[1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
[], [] -> []
[-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]
*/

const compareNumbers = (a, b) => {
    return (a - b);
}

function mergeSortedLists(listOne, listTwo) {
    var result = [];
    result = listOne.concat(listTwo);
    result.sort(compareNumbers);
    return (result);
}

//console.log(mergeSortedLists([1, 2, 5, 6, 9], [3, 4, 5, 10]));
//console.log(mergeSortedLists([], []));
//console.log(mergeSortedLists([-1, 0, 1], [-2, 2]));


//========================================  #10  ==================================================

/* Write a function which accepts two arrays as input. The function should remove all the items from the shorter array, and add them to the end of the longer array. If both arrays are the same length, the function should do nothing. This function does not need to return a value. 

```javascript
var numbers = ['four', 'eleven']
var animals = ['cat', 'bat', 'dolphin']
arrayTransfer(numbers, animals)
console.log(numbers) // []
console.log(animals) // ['cat', 'bat', 'dolphin', 'four', 'eleven']

```*/

//spec: input = 2 array's output = one array unless length is equal
var numbers = ['four', 'eleven']
var animals = ['cat', 'bat', 'dolphin']

function combineArray(arr1, arr2) {
    var result = [];

    if (arr1.length > arr2.length) {
        result = arr1.concat(arr2);
        return (result);
    }

    if (arr2.length > arr1.length) {
        result = arr2.concat(arr1);
        return (result);
    }

    return;
}

//console.log('Introducing the NEW Array: ', combineArray(numbers, animals));
//console.log('Array changes were ', combineArray('a', 'b', 'c', 'd', ['a', 'b', 'c', 'd']));


//========================================  #11  ==================================================

/* Write a function that uses `Math.random()` to generate a random number between 0-1. Replace all the 3's with 8's, and replace all the 7's with 1's, then return this number. Note that this function should return a `number`, not a `string`. 
 */

function generateRandomNumberBetweenZeroAndOne() {
    var resultArr = [];
    var resultNum = null;
    var workNum = null;
    var workArr = [];
    var workString = '';

    workNum = Math.random();
    workArr = workNum.toString().split('');

    workArr.forEach(function (element) {
        if (element === '3') {
            element = '8';
        }

        if (element === '7') {
            element = '1';
        }
        resultArr.push(element);
    });

    workString = resultArr.join('');
    resultNum = parseFloat(workString);

    if (typeof resultNum === 'number') {
        console.log('Original Array: ', workNum)
        console.log('Result of change: ', resultNum);
        return;
    }
}


//generateRandomNumberBetweenZeroAndOne();

//=========================== #12 ==========================


/* Write a function which accepts a sentence as a string, and returns the longest word in that sentence.

'I ate toast for breakfast' -> 'breakfast'
*/

function findLongestWord(sentence) {
    var result = [];
    var workArr = [];
    var workLengthArr = [];
    var maxLength = null;

    workArr = sentence.split(' ');

    workLengthArr = workArr.map(function (element) {
        return (element.length);
    });

    maxLength = Math.max.apply(Math, workLengthArr);

    result = workArr.filter(function (element) {
        return (element.length === maxLength)
    });

    return (result.join(' '));
}

//console.log(findLongestWord('I ate toast for breakfast'));


//=========================== #13 ==========================
/* Write a function which accepts a sentence as a string. Capitalize the first letter of each word of the string, and return that. 

'I ate toast for breakfast' -> 'I Ate Toast For Breakfast'
*/


function workFirstLetter(sentence) {
    var result = [];
    var workArr = [];

    workArr = sentence.split(' ');
    result = workArr.map(function (element) {
        return (capitalizeFirstLetter(element));
    });

    return (result.join(' '));
}

//console.log(workFirstLetter('wade ran to the corner'));
//console.log(workFirstLetter('I ate toast for breakfast'));

//=========================== #14 ==========================
/* Write a function which takes two dates as strings in the format 'YYYY/MM/DD' and returns the number of days between them.
'1998/01/24', '1999/01/25' -> 366
*/

function getDaysBetweenDates(date1, date2) {
    var result = null;
    const oneDayMs = 1000 * 60 * 60 * 24;
    var firstDateMs = Date.parse(date1);
    var secondDateMs = Date.parse(date2);

    result = (secondDateMs - firstDateMs) / oneDayMs;
    console.log(result + ' days between the the two dates');

    return (result);
}

//getDaysBetweenDates('2017/01/10', '2017/01/20');
//getDaysBetweenDates('1998/01/24', '1999/01/25');

//=========================== #15 ==========================
/* Write a function called `add` that adds two numbers together, and returns the result. The function must be defined such that it can be called in two different ways to achieve the same result. See the example below:

```javascript
var seven = add(5,2) // returns 7
seven = add(5)(2) // also returns 7

function add(x){
  return function(y){
    return x + y; 
  };
}

var addTwo = add(2);

addTwo(4) === 6; // true
add(3)(4) === 7; // true
```
*/

function addEmUp(a) {
    let outerArgsResult = sumValues(Array.from(arguments));

    return (function (d) {
        let innerArgsResult = sumValues(Array.from(arguments));
        return (outerArgsResult + innerArgsResult);
    });
}

function sumValues(numbsArr) {
    return (
        numbsArr.reduce(function (sum, val) {
            return sum += val;
        }, 0)
    );

}


function testAddWithClosure() {

    console.log(addEmUp(4)(7), '  : 11 - Straight up Addition'); //11

    var addWithArguments = addEmUp(5);
    console.log(addWithArguments(9), ' : 14 - Add One with arguments'); // 14    // console.log(addOneWithArgument(4));

    var addWithArguments2 = addEmUp(5, 6);
    console.log(addWithArguments2(9), ' : 20 - Add One with arguments part II'); // 20

    var addOne = addEmUp(2)(6);
    console.log(addOne, ' : 8 - A single number for each function'); //8

    var addTwo = addEmUp(2, 4)(4);
    console.log(addTwo, ' : 10 - Add one array and then single number'); // 10

    var addThree = addEmUp(2, 4)(4, 3);
    console.log(addThree, ' : 13 - Add 2 groups with arguments'); // 13

    var addItAgain = addEmUp(2)(4, 3);
    console.log(addItAgain, ' : 9 - Add 2 groups with One argument foloowed by two'); // 9

    var addFour = addEmUp(11, 4);
    console.log(addFour(4, 23), ' : 42 - Add 2 groups again'); // 42

}

//testAddWithClosure();


//=========================== #16 ==========================
/*
 Write a function which takes one argument, and returns true if that argument is a whole number (a non-negative integer, e.g. 0, 1, 5, 21, 1000, etc). If the argument is negative, is a decimal number, or is not a number at all, return false. 
*/

function checkIfWholeNumb(numb) {
    if (Number.isInteger(numb) && (!isNaN(numb)) && (numb > 0)) {
        return (true);
    }
    return false;
}

function testCheckIfWholeNumb() {
    console.log(checkIfWholeNumb(3));
    console.log(checkIfWholeNumb(-3));
    console.log(checkIfWholeNumb(3.2));
    console.log(checkIfWholeNumb('bob'));
    console.log(checkIfWholeNumb(7));
    console.log(checkIfWholeNumb(null));
    console.log(checkIfWholeNumb(NaN));
    console.log(checkIfWholeNumb(13));
}

//testCheckIfWholeNumb();

//=========================== #17 ==========================
//
/* Write a function which returns a random integer from 1 to 10.

*/
function randomInteger() {
    return Math.ceil(Math.random() * 10);
}

//console.log(randomInteger());

console.log('\n# - Ending Processing - #\n');
