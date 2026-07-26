// sum of 2 integers
let a = 10 ;
let b = 20 ;
console.log(a+b)

//string + string = string
// string + int = string
// int + int = int
// Relation b/w integer and string
let ab = 10
let bc = "20"
console.log(typeof(ab+bc))

//eg
let aa = 10
let bb = 20
console.log("The sum of " + aa + " and " + bb + " is " + (aa+bb));

//type coercion
console.log(1+1) // 2
console.log(1+"1") // 11
console.log(1-1) // 0
console.log(1-"1") // 0 ( subtract operator subtract the value no matter the type)
console.log(1-"sanket") // NaN
console.log("hi" - "guys") // Nan
// subtract , multiplication , divisor operator these three operator follow same principle it means they do not care for the type of a number wheater it is int or string

// // Value from the user
// let val1 = Number(prompt("Enter value 1: "));
// let val2 = Number(prompt("Enter value 2: "));
// console.log((val1 + val2));

// swap two variable via 3 methods
// first method
let va1 = 2;
let va2 = 4;
let va3;
va3 = va1;
va1 = va2;
va2 = va3;
console.log(va1 , va2);

// second method
let v1 = 12;
let v2 = 21;
[v1 , v2] = [v2 , v1];
console.log(v1 , v2);

// third method
let vl1 = 89
let vl2 = 98
vl1 = vl1+vl2
vl2 = vl1-vl2
vl1 = vl1-vl2
console.log(vl1,vl2)

