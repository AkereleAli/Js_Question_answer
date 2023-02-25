// Write a program to check if a year is leap year or not.
// Nb: If a year is divisible by 4, then it is leap year.
// Sample below
// isLeapYear(2000) - True
// isLeapYear(1998) - False

function isLeapYear(year){
  if (year % 4 === 0){
    return "True"
  }else{
    return "False"
  }
}
console.log(isLeapYear(2000))
console.log(isLeapYear(1998))


// Write a function that accepts 2 parameters,length and breadth 
// of a rectangle, then checks if it is square or not.
// it should return  "This is a square " if the length and square are equal
// and "This is a rectangle" if they are not
// Sample below
// isSquareOrRectangle(5,9) - This is a rectangle
// isSquareOrRectangle(8,8) - This is a Square

function isSquareOrRectangle(length, breadth){
  if(length === breadth){
    return "This is a square"
  }else if(length !== breadth){
    return "This is a rectangle"
  }
}
console.log(isSquareOrRectangle(5,9))
console.log(isSquareOrRectangle(8,8))


// Profitable Gamble
// Create a function that takes three arguments prob, prize, pay 
// and returns true if prob * prize > pay; otherwise return false.
// sample below
// profitableGamble(0.2, 50, 9) ➞ true
// profitableGamble(0.9, 1, 2) ➞ false
// profitableGamble(0.9, 3, 2) ➞ true

function profitableGamble(prob, prize, pay){
  if(prob * prize > pay){
    return "True"
  }else{
    return "False"
  }
}
console.log(profitableGamble(0.2, 50, 9))
console.log(profitableGamble(0.9, 1, 2))
console.log(profitableGamble(0.9, 3, 2))


// Two Makes Ten
// Create a function that takes two arguments.
//  Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// sample below
// makesTen(9, 10) ➞ true
// makesTen(9, 9) ➞ false
// makesTen(1, 9) ➞ true

function makesTen(a,b){
  if(a ===10  || b === 10 || a + b ===10){
    return "True"
  }else{
    return "False"
  }
}
console.log(makesTen(9,10))
console.log(makesTen(9,9))
console.log(makesTen(1,9))


// Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Sample below
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "edabit") ➞ false

function compare(text1,text2){
  if (text1.length === text2.length){
    return "True"
  }else{
    return "False"
  }
}
console.log(compare("AB", "CD"))
console.log(compare("ABC", "DE"))
console.log(compare("hello", "edabit"))


// Movie Theatre Admittance
// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.
// Sample below
// acceptIntoMovie(14, true) ➞ true
// acceptIntoMovie(14, false) ➞ false
// acceptIntoMovie(16, false) ➞ true

function acceptIntoMovie(age, isSupervised){
    if(age >= 15 || isSupervised == true){
     return "true" 
    }else{
      return "false"
    }
  }
  console.log(acceptIntoMovie(14, true))
  console.log(acceptIntoMovie(14, false))
  console.log(acceptIntoMovie(16, false))


  // Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

// Sample below
// oddOrEven("apples") ➞ true
//  The word "apples" has 6 characters.
//  6 is an even number, so the program outputs true.

// oddOrEven("pears") ➞ false
//  "pears" has 5 letters, and 5 is odd.
//  Therefore the program outputs false.

// oddOrEven("cherry") ➞ true

function oddOrEven(text){
    if(text.length % 2 === 0){
      return "true"
    }else{
      return "false"
    }
  }
  
  console.log(oddOrEven("apples"))
  console.log(oddOrEven("pears"))
  console.log(oddOrEven("cherry"))

  
  //  Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// Sample below
// isLastCharacterN("Aiden") ➞ true
// isLastCharacterN("Piet") ➞ false
// isLastCharacterN("Bert") ➞ false
// isLastCharacterN("Dean") ➞ true


function isLastCharacterN(name){
    if(name.charAt(name.length-1) === "n"){
      return "true"
    }else{
      return "false"
    }
  }
  
  console.log(isLastCharacterN("Aiden"))
  console.log(isLastCharacterN("Piet"))
  console.log(isLastCharacterN("Bert"))
  console.log(isLastCharacterN("Dean"))

  
  //  Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// Sample Below
// isPlural("changes") ➞ true
// isPlural("change") ➞ false
// isPlural("dudes") ➞ true
// isPlural("magic") ➞ false

function isPlural(text){
    if(text.charAt(text.length-1) === "s"){
      return "true"
  }else{
    return "false"
  }
  }
  console.log(isPlural("changes"))
  console.log(isPlural("change"))
  console.log(isPlural("dudes"))
  console.log(isPlural("magic"))


  //  Write a function that allows a shop to give a discount of 10% 
// if the cost of purchased quantity is more than 1000.
// The function should take a parameter for the  quantity
// You can assume 1 unit quantity will cost 100 dollars.
// Output the total cost for the user

function discountEarned(quantityOfItem){
    let costPerItem = 100
  let totalCost = quantityOfItem * costPerItem
    let discount = ((10/100) * totalCost)
     let discountCost = totalCost - discount
    
    if(totalCost > 1000){
     
      return `You have earned a 10% discount for purchasing ${quantityOfItem} items, each at the rate of ${costPerItem} dollars. Your discount cost is ${discountCost}`
    }else{
      return "Thank you for your patronage"
    }
  }
  
  console.log(discountEarned(20))
  console.log(discountEarned(9))
  
  

  



