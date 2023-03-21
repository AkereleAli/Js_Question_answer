

//The Fifth Argument
// Create a function that has some arguments and returns the type of the fifth argument. In case the arguments were less than 5, return "Not enough arguments".
// Sample below
// fifth(1, 2, 3, 4, 5) ➞ "number"
// fifth("a", 2, 3, true, "five") ➞ "string"
// fifth() ➞ "Not enough arguments"

function fifth(argument){
  let argLen = arguments.length
  if(argLen >= 5){
    return typeof(arguments[4])
  }
  {
   return  "Not enough arguments"
  }
}

// console.log( fifth(1, 2, 3, 4, 5));
// console.log(fifth("a", 2, 3, true, "five"));
// console.log( fifth());

// 12.Taxi Journey
// A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.
// Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.
// Examples
// journeyDistance(3) ➞ 1
// // The first kilometer costs $3
// journeyDistance(9) ➞ 4
// // The first kilometer costs $3 plus the other three kilometers (costing $2 each)
// journeyDistance(5) ➞ 2

function journeyDistance(cost){
  let firstKm = 3/3
  let subsequentKm = (cost - 3) / 2
  let totalKm = firstKm + subsequentKm
  if (cost === 3)
    return firstKm
  else{
    return totalKm
  }
}
// console.log(journeyDistance(3))
// console.log(journeyDistance(9))
// console.log(journeyDistance(5))

// //  Days in a Month
// Create a function that takes the month and year (as integers) and returns the number of days in that month.

// Sample below
// days(2, 2018) ➞ 28
// days(4, 654) ➞ 30
// days(2, 200) ➞ 28
// days(2, 1000) ➞ 28

function days(month, year){
  return new Date (year, month, 0).getDate()
}
//   console.log(days(2, 2018))
//   console.log(days(4, 654))
//   console.log(days(2, 200))
//   console.log(days(2, 1000))

// Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

// Sample below
// newWord("apple") ➞ "pple"
// newWord("cherry") ➞ "herry"
// newWord("plum") ➞ "lum"

function newWord(text){
  return text.substring(1)
}
// console.log(newWord("apple"))
// console.log(newWord("cherry"))
// console.log(newWord("plum"))

// Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.
// Sample below
// firstLast("ganesh") ➞ "gh"
// firstLast("kali") ➞ "ki"
// firstLast("shiva") ➞ "sa"
// firstLast("Salman") ➞ "Sn"
// firstLast("Adeyemi") ➞ "ai"

function firstLast(text){
  let firstXter = text.substring(0,1)  
  let lastXter = text.charAt(text.length-1)
  return firstXter + lastXter
  }
  // console.log(firstLast("ganesh"))
  // console.log(firstLast("kali"))
  // console.log(firstLast("salman"))
  // console.log(firstLast("adeyemi"))

  // The Study of Wumbology
// Create a function that flips M's to W's (all uppercase).

// Sample below
// wumbo("I LOVE MAKING CHALLENGES") ➞ "I LOVE WAKING CHALLENGES"
// wumbo("MEET ME IN WARSAW") ➞ "WEET WE IN WARSAW"
// wumbo("WUMBOLOGY") ➞ "WUWBOLOGY"

function wumbo(text){
  let changeText = text.replaceAll("m","w")
 let upperCaseText = changeText.toUpperCase()
  return upperCaseText
}
// console.log(wumbo("i love making challenges"))
// console.log(wumbo("meet me in warsaw"))
// console.log(wumbo("wumbology"))

// Reverse the Order of a String
// Create a function that takes a string as its argument and returns the string in reversed order.

// Sample below
// reverse("Hello World") ➞ "dlroW olleH"
// reverse("The quick brown fox.") ➞ ".xof nworb kciuq ehT"
// reverse("Edabit is really helpful!") ➞ "!lufpleh yllaer si tibadE"

function reverse(text){
  return `"${text.split("").reverse().join("")}"`
}
// console.log(reverse("Hello World"))
// console.log(reverse("The quick brown fox."))
// console.log(reverse("Edabit is really helpful!"))


//  Check if String Ending Matches Second String
// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
// Examples
// checkEnding("abc", "bc") ➞ true
// checkEnding("abc", "d") ➞ false
// checkEnding("samurai", "zi") ➞ false
// checkEnding("feminine", "nine") ➞ true
// checkEnding("convention", "tio") ➞ false

function checkEnding(text1, text2){
  if(text1.endsWith(text2)){
    return "true"
  }else{
    return "false"
  }
}
// console.log(checkEnding("abc", "bc"))
// console.log(checkEnding("abc", "d"))
// console.log(checkEnding("samurai", "zi"))
// console.log(checkEnding("feminine", "nine"))
// console.log(checkEnding("convention", "tio"))

// Return the Middle Character(s) of a String
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

// Sample below
// getMiddle("test") ➞ "es"

// getMiddle("testing") ➞ "t"

// getMiddle("middle") ➞ "dd"

// getMiddle("A") ➞ "A"


function getMiddle(string){
  let stringLength = string.length
  if (stringLength % 2 != 0){
    let start = (stringLength-1)/2
    return string.substring(start, start+ 1)
  }else{
    let start = (stringLength/2)-1
    return string.substring(start, start + 2)
  }
}
// console.log(getMiddle("test"))
// console.log(getMiddle("testing"))
// console.log(getMiddle("middle"))
// console.log(getMiddle("A"))

//  Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
// Sample below
// isPlural("changes") ➞ true
// isPlural("change") ➞ false
// isPlural("dudes") ➞ true
// isPlural("magic") ➞ false

function isPlural(word){
  return word.endsWith('s') 
 }
 // console.log(isPlural("changes"))
 // console.log(isPlural("change"))
 // console.log(isPlural("dudes"))
 // console.log(isPlural("magic"))

 // 21. Default Mood
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// NB: USe the string interpolation to do this
// Sample below
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday("sad") ➞ "Today, I am feeling sad"
// moodToday() ➞ "Today, I am feeling neutral"

function moodToday(mood){
  if (mood){
    return `"Today, I am feeling ${mood}"`
  }else{
    return `"Today, I am feeling neutral"`
  }
}
// console.log(moodToday("happy"))
// console.log(moodToday("sad"))
// console.log(moodToday())


// 22. Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.

// Sample below
// match("hello", "hELLo") ➞ true
// match("motive", "emotive") ➞ false
// match("venom", "VENOM") ➞ true
// match("mask", "mAskinG") ➞ false

function match(text1, text2){
  let areEqual = text1.toUpperCase() === text2.toUpperCase()
  return areEqual
}
// console.log(match("hello", "hELLo"))
// console.log(match("motive", "emotive"))
// console.log(match("venom", "VENOM"))
// console.log(match("mask", "mAsKinG"))


// 23. City School Creating IDS
// Many IDS (for emails or Google ID) are created using the person's name.
// Create a function that will return a four-character ID using the person's first name and last name.
// The first character will be the first letter of the first name but in lowercase. 
// The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

// Sample below
// createID("mary", "lamb") ➞ "mLam"
// createID("John", "SMITH") ➞ "jSmi"
// createID("mary", "smith") ➞ "mSmi"

function createdID(firstName, lastName){
  firstXter = firstName.charAt(0).toLowerCase()
  last3Xter =lastName.charAt(0).toUpperCase() + lastName.substring(1,3).toLowerCase()
  ID =firstXter + last3Xter
  return `"${ID}"`
}
// console.log(createdID("mary", "lamb"))
// console.log(createdID("john", "SMITH"))
// console.log(createdID("mary", "smith"))


// 24.  The last time we searched google with word and added spaces at the back of the Word
// Google did some magik there in by changing all the spaces to +
// Now your job is to write a function that does that magik google did the other days
// Function should take aparamter and thne returned a result that has all the space chnagesd to +

// sample below
// google("Enjoying     ") ➞ "Enjoying+++++"
// google("Zulfah  ") ➞ "Zulfah++"

function google(search){
 return search.replaceAll(" "," +") 
}
// console.log(google("Enjoying      "))
// console.log(google("Zulpha  "))


// 25. Reverse and Capitalize
// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

// Sample below
// reverseCapitalize("abc") ➞ "CBA"
// reverseCapitalize("hellothere") ➞ "EREHTOLLEH"
// reverseCapitalize("input") ➞ "TUPNI"

function reverseCapitalize(text){
  let reverse = text.split("").reverse().join("")
  let upperCase = reverse.toUpperCase()
  return upperCase
}
// console.log(reverseCapitalize("abc"));
// console.log(reverseCapitalize("hellothere"));
// console.log(reverseCapitalize("input"));

// 26. Check if input variable is a number or not
// Write a function isValidNumber that checks if input variable is a
// number or not The function should return “Variable is not a number” if its not and
// return  “Variable is a valid number”.
// NB: hint is read about the isNaN in the mdn docs
// sample below
// isValidNumber(11) //"11 is a valid number"
// isValidNumber("19") //"19 is a valid number"
// isValidNumber("xyz") //"xyz is not a number"
// isValidNumber("17.5") //"17.5 is a valid number"
// isValidNumber("21F") //"21F is not a number" 

function isValidNumber(number){
  if(typeof(number) !== "number"){
    return `${number} is not a number.`
  } else {
    return `${number} is a number valid number.`
  }
}

// console.log(isValidNumber(11));
// console.log(isValidNumber("19"));
// console.log(isValidNumber("xyz"));
// console.log(isValidNumber("17.5"));
// console.log(isValidNumber("21F"));


// 27.  Verify the email address
// write a function to determine whether an email address is valid or not.
// NB: An email is valid if it contains "@" sign

// sample below
// isEmailValid("roshbon@gmail.com") ➞ true
// isEmailValid("zaicongmail.com") ➞ false

function isEmailValid(email){
  if(email.includes('@')){
    return `True, ${email} is a valid email.`
  } else {
    return `False, ${email} is not a valid email.`
  }
}
// console.log(isEmailValid("roshbon@gmail.com"))
// console.log(isEmailValid("zaicongmail.com"))

// 28. Truncate String
// Write a JavaScript function to extract a specified number of characters from a string starting from the first character

// Sample below
// truncate_string("Robin Singh",4))  ➞ Robi
// truncate_string("Ali Akerele",2))  ➞ Al

function truncateString(name, num){
  return `${name.substring(0, num)}`
}

// console.log(truncateString("Robin Singh", 4))
// console.log(truncateString("Ali Akerele", 2))


// 29. Repeat Data
// Write a JavaScript function to repeat a string a specified times. It takes 2 parameters
// The string and the number of repeatition
// sample below
//  repeat_string('Hello', 4)); "Hello Hello Hello Hello"
//  repeat_string('Vote wisely', 2) "Vote wisely Vote wisely"

function repeatString(word, num){
  return `"${word.repeat(num)}"`  
  };
// console.log(repeatString('Hello ', 4))
// console.log(repeatString('Vote wisely ', 2))


// 30. Hello; Hello World; World
// Write a function that takes an integer and:
// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
// Sample below
// helloWorld(3) ➞ "Hello"
// helloWorld(5) ➞ "World"
// helloWorld(15) ➞ "Hello World"

function helloWorld(int){
  if(int % 3 === 0 && int % 5 === 0){
    return `"${"Hello World"}"`
  } else if( int % 5 === 0){
    return  `"${"World"}"`
  } else if (int % 3 === 0) {
    return `"${"Hello"}"`
  };
};

// console.log(helloWorld(3))
// console.log(helloWorld(5)) 
// console.log(helloWorld(15))


//  Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// Sample below
// isLastCharacterN("Aiden") ➞ true
// isLastCharacterN("Piet") ➞ false
// isLastCharacterN("Bert") ➞ false
// isLastCharacterN("Dean") ➞ true

function isLastXterN(name){
if(name.endsWith("n") || name.endsWith("N")){
  return true 
}
  {
  return false
}
}
// console.log(isLastXterN("aiden"))
// console.log(isLastXterN("piet"))
// console.log(isLastXterN("bert"))
// console.log(isLastXterN("DEAN"))


// Write a function that allows a shop to give a discount of 10% 
// if the cost of purchased quantity is more than 1000.
// The function should take a parameter for the  quantity
// You can assume 1 unit quantity will cost 100 dollars.
// Output the total cost for the user.

function discountEarned(quantityOfItem){
  let costPerItem = 100
let totalCost = quantityOfItem * costPerItem
  let discount = ((10/100) * totalCost)
   let discountCost = totalCost - discount
  
  if(totalCost > 1000){
   
    return `You have earned a 10% discount for purchasing ${quantityOfItem} items, each at the rate of ${costPerItem} dollars. Your total cost is ${totalCost} dollars, your discount cost is ${discountCost} dollars`
  }else{
    return `Your total cost is ${totalCost} dollars. Thank you for your patronage.`
  }
}

//   console.log(discountEarned(20))
//   console.log(discountEarned(9))








