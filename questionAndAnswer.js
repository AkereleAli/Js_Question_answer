The Fortune Teller.

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune 
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be an X in Y, and married to Z with N kids."

Where X is the job title , Y is the location , Z is the partners name, and N is the number of children

Call that function 3 times with 3 different values for the arguments.


function tellFortune(jobTitle, geoLocation, partnerName,numChildren) {
let fortune = `you will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`
return fortune 
}
console.log(tellFortune("doctor", "London", "Mary", 2))
console.log(tellFortune("nurse", "Lagos", "John", 3))
console.log(tellFortune("chemist", "Dubai", "Ola", 4))


The Puppy Age Calculator.

You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:
takes 1 parameter: puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.


function calculateDogAge(puppyAge){
  const dogAge = puppyAge * 7
  return `"Your doggie is ${dogAge} years old in dog years!"`
}
console.log(calculateDogAge(2))
console.log(calculateDogAge(3))
console.log(calculateDogAge(5))


The Lifetime Supply Calculator.

Ever wonder how much a "lifetime supply" of your favourite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for the rest of the life .
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.


function calcSupply(Age, amountPerDay){
  let deathAge = 80  //Assuming 80 is the last year
  let amountPerYear = amountPerDay * 365
  let amountConsumedForTheRestOfLife = (deathAge - Age) * amountPerYear

  return `"You will need ${amountConsumedForTheRestOfLife} to last you until the ripe old age of ${deathAge}"`
}
console.log(calcSupply(30, 2.5))
console.log(calcSupply(50, 3))
console.log(calcSupply(20, 3.5))



The Geometrizer.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius and output. "The circumference is NN."
Also, create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius and output. "The area is NN."


function calcCircumference(radius){
  const circumference = 2 * Math.PI * radius
  return `"The circumference is ${circumference}"`
  
} 
console.log(calcCircumference(10))
console.log(calcCircumference(12))
console.log(calcCircumference(15))


function calcArea(radius){
  const Area = Math.PI * radius**2
  return `"The Area is ${Area}"`
}
console.log(calcArea(10))
console.log(calcArea(7))
console.log(calcArea(12))


The Temperature Converter.

It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".


Create another function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."


function celsiusToFahrenheit(celsius){
 const fahrenheit = (celsius * 9/5) + 32
  return fahrenheit
}

function fahrenheitToCelsius(fahrenheit){
  const celsius = (fahrenheit - 32) * 5/9
  return celsius
}
console.log(fahrenheitToCelsius(40))
console.log(celsiusToFahrenheit(70))


Return the Sum of Two Numbers. 
Write a function that takes two numbers as arguments and returns their sum.
samples below
addition(3, 2) ➞ 5
addition(-3, -6) ➞ -9
addition(7, 3) ➞ 10


function sum(a, b) {
  return a + b
}
console.log(sum(3, 2))
console.log(sum(-3, -6))
console.log(sum(7, 3))


Return the Next Number from the Integer Passed
Write a function that takes a number as an argument, increases the number by 1 and returns the result.
samples below
nextNumber(0) ➞ 1
nextNumber(9) ➞ 10
nextNumber(-3) ➞ -2 

 function nextNumber(number) {
 return ++number
}
console.log(nextNumber(0))
console.log(nextNumber(9))
console.log(nextNumber(-3))


Convert Age to Days
Write a function that takes the age in years and returns the age in days.
samples below
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300


function calcAge(age) {
let ageInDays = age * 365
  return ageInDays
}
console.log(calcAge(65))
console.log(calcAge(0))
console.log(calcAge(20))


Power Calculator
Write a function that takes voltage and current and returns the calculated power. NB: power = voltage * current
samples below
circuitPower(230, 10) ➞ 2300
circuitPower(110, 3) ➞ 330
circuitPower(480, 20) ➞ 9600

function circuitPower(voltage, current) {
 let power = voltage * current
 return power
}
console.log(circuitPower(230, 10))
console.log(circuitPower(110, 3))
console.log(circuitPower(480, 20))


Return Something to Me!
Write a function that returns the string "something" joined with a space " " and the given argument a.
sample below
giveMeSomething("is better than nothing") ➞ "something is better than nothing"
giveMeSomething("Bob Jane") ➞ "something Bob Jane"
giveMeSomething("something") ➞ "something something"


function giveMeSomething(x) {
 let request = `"something ${x}"`
  return request
}
console.log(giveMeSomething("is better than nothing"))
console.log(giveMeSomething("Bob Jane"))
console.log(giveMeSomething("something"))


Concatenate First and Last Name into One String
Write a function that takes 2 parameters firstName and lastName, return a single string in the format "last, first."
sample below
concatName("Johnny", "Bravo") ➞ "Last, First"
concatName("John", "Doe") ➞ "Doe, John"
concatName("Mary", "Jane") ➞ "Jane, Mary"


function concatName(firstName, lastName) {
 let surname =`"${lastName}, ${firstName}"`
 return surname
}
console.log(concatName("Johnny", "Bravo"))
console.log(concatName("John", "Doe"))
console.log(concatName("Mary", "Jane"))



Return the Remainder from Two Numbers
Write a function that takes two numbers as arguments and returns the remainder of the first number divided by the second number.
sample below
remainder(1, 3) ➞ 1
remainder(3, 4) ➞ 3
remainder(-9, 45) ➞ -9

function remainder(number1, number2) {
return number1 % number2
}
console.log(remainder(1,3))
console.log(remainder(3,4))
console.log(remainder(-9,45))


Return Negative
Write a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
sample below
returnNegative(4) ➞ -4
returnNegative(15) ➞ -15
returnNegative(-4) ➞ -4
returnNegative(0) ➞ 0

function returnNegative(number) {
 if(number<=0) {
   return number
 }else {
   return -number
 }
}
console.log(returnNegative(4))
console.log(returnNegative(15))
console.log(returnNegative(-4))
console.log(returnNegative(0))


String and Number Conversions
Write a function that takes a string and returns it as an integer.
sample below
intToString(4) ➞ "4"
stringToInt("4") ➞ 4

function stringToInt(x) {
 return str(x)
}
console.log(stringToInt("4"))


function intToString(num) {
 return string(num)
}
console.log(intToString(4))


Four Passengers and a Driver (Here a bit problem solving, you have to think of the solution before you code)
A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
sample below

carsNeeded(5) ➞ 1
carsNeeded(11) ➞ 3
carsNeeded(0) ➞ 0

function carsNeeded(passengers){
 return Math.ceil(passengers / 5)
}
console.log(carsNeeded(5));
console.log(carsNeeded(11));
console.log(carsNeeded(0));


Return the Total Number of Parameters (Here's another bit of problem solving)
Write a function that returns the total number of parameters passed in.
sample below
numberArgs("a", "b", "c") ➞ 3
numberArgs(10, 20, 30, 40, 50) ➞ 5
numberArgs(x, y) ➞ 2
numberArgs() ➞ 0


function numberArgs(){
  return  arguments.length
  }
console.log(numberArgs("a", "b", "c"))
console.log(numberArgs(10, 20, 30, 40, 50))
console.log(numberArgs("x", "y"))
console.log(numberArgs())


WordCharWord
Write a function that takes 2 argument. The function will put the first argument(that should be a character), in the begining and the end of the second argument, a string.
sample below
wordCharWord("R", "javascript is fun") ➞ "R javascript is fun R"
wordCharWord("#", "hello world!") ➞ "# hello world! #"
wordCharWord("his", "lets jump on code ") ➞ "# lets jump on code #"

function WordCharWord(x,y) {
 let result = `"${x} ${y} ${x}"`
  return result
}
console.log(WordCharWord("R", "javascript is fun"))
console.log(WordCharWord("#", "hello world!"))
console.log(WordCharWord("#", "let's jump on code"))


Stuttering Function
Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
sample below
stutter("incredible") ➞ "eerrm... errrm... incredible?"
stutter("enthusiastic") ➞ "eerrm... eerrm... enthusiastic?"
stutter("outstanding") ➞ "eerrm... eerrm... outstanding?"

function stutter(text) {
 let stutteredWords = `"${text.substring(0,2)}...  ${text.substring(0,2)}... ${text}?"`
  return stutteredWords
}
console.log(stutter("incredible"))
console.log(stutter("enthusiastic"))
console.log(stutter("outstanding"))



Write a funtion that returns the type of a parameter passed to it.
sample below
typeOf(1) ➞ "number"
typeOf("a") ➞ "string"
typeOf("The man ran away") ➞ "string"

function typeOf(x) {
 return typeof x
 }
console.log(typeOf(1))
console.log(typeOf("a"))
console.log(typeOf("The man ran away"))


Write a function that takes a number as an argument and returns the square root of that number.
sample below
squareRoot(9) ➞ 3
squareRoot(16) ➞ 4
squareRoot(25) ➞ 5


function squareRoot(number) {
return Math.sqrt(number)
}
console.log(squareRoot(9))
console.log(squareRoot(16))
console.log(squareRoot(25))













