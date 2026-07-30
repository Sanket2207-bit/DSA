// Maths functions 

// Ceil function decimal value ko next value bna deta h 1.23 = 2 , 2.1 = 2
console.log(Math.ceil(1.23));

// Floor function is opposite of ceil function 1.23 = 1 , 2.9 = 2
console.log(Math.floor(1.23));

// Round function roundoff the no if no greater than or equal to 5 it will round of to next no if smaller than 5 it will round of it the before no
console.log(Math.round(8.5));
console.log(Math.round(8.6));
console.log(Math.round(8.4));

// Abs function convert negative value into positive value
console.log(Math.abs(-98));

// Trunc function remove the decimal part and return integer part
console.log(Math.trunc(78.9472349864387));

// Pow function convert the no to its given power
console.log(Math.pow(3 , 5));

// Max function return the maximum value from a group of values
console.log(Math.max(10 , 989 , 1001 , 22));

// Min function return the mainimum value from a group of values
console.log(Math.min(10 , 989 , 1001 , 22));

// Sqrt function give the square root of the no
console.log(Math.sqrt(144));

// Cbrt function give the cube root of the no
console.log(Math.cbrt(512));

// Random function give random value between 0 and 1
console.log(Math.random());

let ab = 973.9367872
console.log(ab.toFixed(3)); // tofixed function will return exaclty 3 values after decimal , tofixed return no as string 

// Question Practice
// Q1 Find compount interest of the vales given by user
CP = A - P (A = p*(1+r/100)^t)
let p = prompt("Enter principle amount")
let r = prompt("Enter rate of interest")
let t = prompt("Enter duration of loan")
console.log((p * Math.pow(1+r/100 , t)) - p);

// Q2 Generate Otp
let otp = Math.random() * 9000 + 1000
let fdig = Math.trunc(otp)
console.log(fdig);

// Q3 Area of Triangle by heron's formula
// Heron's formula for triangle is sqrt(s(s-a)(s-b)(s-c)) and s = (a+b+c)/2
let a = Number(prompt("Enter side1 of a traingle"))
let b = Number(prompt("Enter side2 of a traingle"))
let c = Number(prompt("Enter side3 of a traingle"))
let s = (a + b + c)/2
console.log(Math.sqrt(s*(s - a)*(s - b)*(s - c)))

// Q4 Circumference of Circle
let rad = Number(prompt("Enter radius of a circle"))
console.log(2 * 3.14 * rad)

// IF-Else problems
// Q1 Accept 2 number and print the greatest number between them.
let num1 = Number(prompt("Enter num1"))
let num2 = Number(prompt("Enter num2"))
if(num1>num2){
    console.log(`num1(${num1}) is greater than num2(${num2})`)
}
else{
    console.log(`num2(${num2}) is greater than num1(${num1})`)
}

// Q2 Accept an integer and check whether is it odd or even.
let int1 = Number(prompt("Enter your integer"))
if(int1%2!=0){
    console.log(`${int1} is odd`)
}
else(
    console.log(`${int1} is even`)
)