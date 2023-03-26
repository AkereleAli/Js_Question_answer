//https://leetcode.com/problems/build-array-from-permutation/submissions/915265066/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 function buildArray(nums){
     let ans = []
     nums.forEach(function(num, index){
         ans.push(nums[nums[index]])
     })
     return ans
 }


// https://leetcode.com/problems/concatenation-of-array/
function getConcatenation(nums){
  let ans = []
  nums.map(function(num, index){
   ans = [...nums, ...nums] 
})
  return ans
}
 
//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let firstWord = word1.join('')
    let secondWord = word2.join('') 
    if(firstWord == secondWord){
        return true
    }else{
        return false
    }
    
};

// console.log(arrayStringsAreEqual(["abc","d","defg"],["abcddef"]))



//https://leetcode.com/problems/truncate-sentence/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let splitted = s.split(' ')
    let words = splitted.slice(0,k)
    let result = words.join(' ')
    return result
    
};

//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/submissions/916263386/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

//https://leetcode.com/problems/two-sum/submissions/917035206/
var twoSum = function(nums, target) {
    let resArr = []
   nums.forEach(function(el, i) {
       let difference = target - el
       if(nums.includes(difference) && nums.indexOf(difference) !== i) {
           resArr.push(i, nums.indexOf(difference))
       }
   }) 
   let Result = resArr.slice(0,2)   
   return Result
};

//https://leetcode.com/problems/find-the-difference/
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if(s.concat(t.at(-1)) == t){
        return t.at(-1)
    }
};

//https://leetcode.com/problems/third-maximum-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let newNum = nums.sort(function(a,b){
        return  b-a
    })
    if(newNum.length< 3){
        return newNum[0]
    }else if(newNum.length >= 3 && newNum[0] == newNum[1]) {
        return newNum.at(-1)
    }else {
        return newNum.at(-1) 
    }
    
};

//https://leetcode.com/problems/squares-of-a-sorted-array/submissions/917092426/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squaredNums = []
     nums.forEach(function(num){
         squaredNums.push(num*num)

    })
    squaredNums.sort(function(a,b){
        return a - b
    })
    return squaredNums
};

// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Sample Cases
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

function getFirstValue(nums){
  let firstValue = nums[0]
  return firstValue
}

// Pair Management
// Given two arguments, return an array which contains these two arguments.

// Sample Cases
// makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]
// makePair(512124, 215) ➞ [512124, 215]

function makePair(num1,num2){
return [num1,num2]
}

// Reverse an Array
// Write a function to reverse an array.

// Sample Case
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []

function reversedArr(arr){
  return arr.reverse()
}

// Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Sample Case
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

function arrayToString(arr){
  return arr.join('')
}

// Array Indexing
// Given an index and an array, return the value of the array with the given index.

// Sample Cases
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6
// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5
// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4

function valueAt(Arr, index){
  return Arr[Math.floor(index)]
}

// Find the Index 
// Create a function that finds the index of a given item.

// Sample cases
// search([1, 5, 3], 5) ➞ 1
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1

function search(Arr,item){
  return Arr.indexOf(item)
}

// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Sample cases
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

function check(Arr, item){
  if(Arr.includes(item)){
    return true
  }
  return false
} 

// Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.
// Sample case
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]
// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]
// invertArray ➞ []

function invertArray(nums){
  let res = []
  nums.forEach(function(num){
   res.push(-num) 
  })
  return res
}

// Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta

// Sample case
// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]
// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []
// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]

function skipTooMuchSugarDrinks(drinks){
 const sugarDrinks = ["cola", "fanta"]
  let res = drinks.filter(function(drink){
    return !sugarDrinks.includes(drink)
  })
  return res
}
// console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]))
// console.log(skipTooMuchSugarDrinks(["fanta", "cola"]))
// console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]))

  // Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
// Sample cases
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
// filterArray(["Nothing", "here"]) ➞ []

function filterArray(Arr){
  let res = Arr.filter(function(el){
    return typeof el == 'number'
  })
  return res
}
// console.log(filterArray([1, 2, 3, "a", "b", 4]))
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]))
// console.log(filterArray(["Nothing", "here"]))

// The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.
// Sample cases
// forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false
// forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true
// forbiddenLetter("m", []) ➞ true

function forbiddenLetter(letter, Arr){
  let wholeArr = Arr.join('')
  if(wholeArr.includes(letter)){
    return 'false'
  }
  return 'true'
}
// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]))
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]))
// console.log(forbiddenLetter("m", []))

// Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Sample cases
// cleanUpArray(["8"]) ➞ [[8], []]
// cleanUpArray(["11"]) ➞ [[], [11]]
// cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]
// cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]

function cleanUpArray(nums){
  let odd = []
  let even = []
  nums.forEach(function(num,i){
    if(parseInt(num) % 2 === 0){
      even.push(parseInt(num))
    }else{
      odd.push(parseInt(num))
    }
  })
  return [even, odd]
}
// console.log(cleanUpArray(["8"]))
// console.log(cleanUpArray(["11"]))
// console.log(cleanUpArray(["7", "4", "8"]))
// console.log(cleanUpArray(["9", "4", "5", "8"]))

//   String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// Sample cases
// stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]
// stringPairs("edabit") ➞ ["ed", "ab", "it"]
// stringPairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]

function splitString(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    if (i + 1 == str.length) {
      result.push(str[i] + '*');
    } else {
      result.push(str[i] + str[i+1]);
    }
  }
  return result;
}
// console.log(splitString("mubashir"))
// console.log(splitString("edabit"))
// console.log(splitString("airforces"))


// Word Endings
// Create a function that adds a string ending to each member in an array.

// Sample cases
// addEnding(["clever", "meek", "hurried", "nice"], "ly") 
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// addEnding(["new", "pander", "scoop"], "er")
// ➞ ["newer", "panderer", "scooper"]
// addEnding(["bend", "sharpen", "mean"], "ing")
// ➞ ["bending", "sharpening", "meaning"]


function addEnding(Arr, end){
  let result = []
  Arr.forEach(function(el){
    result.push(el+end)
  })
  return result
}
// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"))
// console.log(addEnding(["new", "pander", "scoop"], "er"))
// console.log(addEnding(["bend", "sharpen", "mean"], "ing"))

// Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// Sample cases
// spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eage"]

function spelling(word) {
  var result = [];
  for (var i = 0; i < word.length; i++) {
    result.push(word.slice(0, i + 1));
  }
  return result;
}
console.log(spelling("eagerly"))

function spelling(word){
  let splitted = word.split('')
  let res = []
  splitted.forEach(function(el,i){
    res.push(splitted.slice(0, i + 1).join(''))
  })
  return res
 }

// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
// myFunction([1,2,3,4,5],3) Expected 3

function myFunction(a) {
  return a[n-1]           //a.at(n-1)
}

// Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
// myFunction([1,2,3,4]) Expected [4]
// myFunction([5,4,3,2,1,0]) Expected [2,1,0]

function myFunction(a) {
  return a.slice(3)
}


// Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
// myFunction([1,2,3,4]) Expected [2,3,4]
// myFunction([5,4,3,2,1,0]) Expected [2,1,0]

function myFunction(a) {
  return a.slice(-3)
}

// Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array
// myFunction([5,4,3,2,1,0]) Expected [5,4,3]

function myFunction(a) {
  return a.slice(0,3)
}

// Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.
// myFunction([1, 2, 3, 4, 5], 2) Expected [ 4, 5 ]
// myFunction([1, 2, 3], 6) Expected [ 1, 2, 3 ]
// myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3) Expected [ 6, 7, 8 ]

function myFunction(a) {
  return a.slice(-n)
}

// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
// myFunction([1,2,3], 2) Expected [1, 3]
// myFunction([1,2,'2'], '2') Expected [1, 2]
// myFunction([false,'2',1], false) Expected ['2', 1]
// myFunction([1,2,'2',1], 1) Expected [2, '2']

function myFunction(a,b){
  let result = a.filter(function(item){
    return item !== b
  })
  return result
}

// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
// myFunction([1,-2,2,-4]) Expected 2
// myFunction([0,9,1]) Expected 0

function myFunction(a){
  let countNegative = 0
 a.forEach(function(value){
    if(value < 0){
    countNegative++
    }
  })
  return countNegative
}

function myFunction(a){
  let res = a.filter(function(el){
return (el<0);
});
return res.length
  }


// Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.
// myFunction(['b', 'c', 'd', 'a']) Expected ['a', 'b', 'c', 'd']
// myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w']) Expected ['a', 'a', 'c', 'd', 'w', 'y', 'z']

function myFunction( arr ) {
  return arr.sort()
  }

// Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.
// myFunction([1,3,2]) Expected [3,2,1]
// myFunction([4,2,3,1]) Expected [4,3,2,1]

function myFunction(nums){
  let result = arr.sort(function(a,b){
     return b-a
     }) 
     return result 
}

// Write a function that takes an array of numbers as argument. It should return the sum of the numbers
// myFunction([-50,0,50,200]) Expected 200

let sum = 0
  nums.forEach(function(num){
    sum+=num
  })
  return sum

// Write a function that takes an array of numbers as argument. It should return the average of the numbers. 
// myFunction([10,100,40]) Expected 50

function myFunction(nums){
  let sum = 0
  nums.forEach(function(num){
    sum+=num
  })
  return sum/nums.length
}

// Write a function that takes an array of strings as argument. Return the longest string.
// myFunction(['help', 'me']) Expected 'help'
// myFunction(['I', 'need', 'candy']) Expected 'candy'

function myFunction(arr){
  let longestWord = ""
  arr.forEach(function(el){
    if(el.length > longestWord.length){
      longestWord = el 
    }
  })
  return longestWord
}


// Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.
// myFunction([true, true], [1, 2], ['a', 'b']) Expected [true, true, 1, 2, 'a', 'b']

function myFunction(...arrays){
  let result = []
  arrays.forEach(function(array){
    result = result.concat(array)
  })
  return result
}

function myFunction(...arrays){
  return arrays.flat()
  }


// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.
// myFunction([true, true, true, true]) Expected true 
// myFunction(['test', 'test', 'test']) Expected true 
// myFunction([1,1,1,2]) Expected false 
// myFunction(['10',10,10,10]) Expected false

function myFunction(arr){
  let result = arr.every(function(el){
    return el === arr[0]
  })
return result
}

// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array.
// myFunction([{a:1,b:2},{a:5,b:4}]) Expected [{a:1,b:2},{a:5,b:4}]
// myFunction([{a:2,b:10},{a:5,b:4}]) Expected [{a:5,b:4},{a:2,b:10}] 
// myFunction([{a:1,b:7},{a:2,b:1}]) Expected [{a:2,b:1},{a:1,b:7}]

function myFunction(arr){
  arr.sort(function(a, b) {
    return a.b - b.b;
  });
  return arr;
}

// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array
// myFunction([1, 2, 3], [3, 4, 5]) Expected [ 1, 2, 3, 4, 5 ]
// myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]) Expected [ -11, -10, 5, 22, 41,  42, 333]

function mergeAndSort(arr1, arr2) {
  var merged = arr1.concat(arr2); // merge the two arrays
  var unique = merged.filter(function(item, pos) { // remove duplicate values
    return merged.indexOf(item) === pos;
  });
  var sorted = unique.sort(function(a, b) { // sort the resulting array in ascending order
    return a - b;
  });
  return sorted;
}
