// Accept an integer and Print hello world n times
function helloworld(integer){
     for(let i = 0 ; i < integer ; i++ ){
        console.log("Hello world")
     }
}
let n = prompt("Enter a no: ")
helloworld(n)

//  Print natural number up to n. 
function natnumber(integer){
    for ( i = 1; i<=integer; i++){
        console.log(i)
    }
}
let m = Number(prompt("Enter a natural no: "))
natnumber(m)

//Reverse for loop. Print n to 1
function revnumber(integer){
    for (i = integer; i>0 ; i--){
        console.log(i)
    }
}
let o = Number(prompt("Enter a Revnatural no: "))
revnumber(o)

/* Take a number as input and print its table
     5 * 1 = 5
     5 * 2 = 10 ... up to 10 terms */
function mult(integer){
    for( i = 1 ; i<=10 ; i++ ){
        console.log(`${integer} "x" ${i} = ${integer * i}`)
    }
}
let p = Number(prompt("Enter a table no: "))
mult(p)

//Sum up to n terms
function sum(n){
   let total = 0
    for (i = 1 ; i <= n; i++ ){
        total +=i;
    }
    return total;
}
let t = Number(prompt("Enter a no: "))
console.log(sum(t))

// Factorial of a number
function fact(n){
    let temp = 1
    for (i = n ; i >0 ; i--){
        temp *=i
    }
    return temp
}
let y = Number(prompt("Enter a no: "))
console.log(fact(y));

//Print all the factors of a number.
function ft(n){
    let temp = []
    for(i = 1 ; i <= n ; i++){
        if(n%i == 0){
           temp.push(i);
        }
    }
    return temp;
}
let u = Number(prompt("Enter a no: "))
console.log(`Factor of ${u} are: ` ,  ft(u).join(", "));
