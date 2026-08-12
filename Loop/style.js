// For loop questions

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
    for ( let i = 1; i<=integer; i++){
        console.log(i)
    }
}
let m = Number(prompt("Enter a natural no: "))
natnumber(m)

//Reverse for loop. Print n to 1
function revnumber(integer){
    for (let i = integer; i>0 ; i--){
        console.log(i)
    }
}
let o = Number(prompt("Enter a Revnatural no: "))
revnumber(o)

/* Take a number as input and print its table
     5 * 1 = 5
     5 * 2 = 10 ... up to 10 terms */
function mult(integer){
    for(let i = 1 ; i<=10 ; i++ ){
        console.log(`${integer} "x" ${i} = ${integer * i}`)
    }
}
let p = Number(prompt("Enter a table no: "))
mult(p)

//Sum up to n terms
function sum(n){
   let total = 0
    for (let i = 1 ; i <= n; i++ ){
        total +=i;
    }
    return total;
}
let t = Number(prompt("Enter a no: "))
console.log(sum(t))

// Factorial of a number
function fact(n){
    let temp = 1
    for (let i = n ; i >0 ; i--){
        temp *=i
    }
    return temp
}
let y = Number(prompt("Enter a no: "))
console.log(fact(y));

//Print all the factors of a number.
function ft(n){
    let temp = []
    for(let i = 1 ; i <= n ; i++){
        if(n%i == 0){
           temp.push(i);
        }
    }
    return temp;
}
let u = Number(prompt("Enter a no: "))
console.log(`Factor of ${u} are: ` ,  ft(u).join(", "));

// Check if the number is Prime or not
function prime(n){
    for(let i = 2; i < n ; i++){
        if(n%i==0){
            console.log(`${n} is not a prime no`);
            return;
        }
    }
    console.log(`${n} is a prime no`)
}
let i = Number(prompt("Enter your no: "))
prime(i);

/*  Write a program to take two inputs a, b & find the value of a  raised to the power of b.
     Ex - a = 2, b = 5 
     OP - 2^5 = 32 */
function power(a,b){
    if ( a === 0 && b <= 0) return undefined;
    if ( b === 0) return 1;
    if ( b > 0) return a**b;
    return 1/((a)**Math.abs(b))
}
console.log(power(-8 , -3));

// use of break statement
let a = 10;
for (i = 1 ; i<a ; i++){
    if(i === 8) break
    console.log(i)
}

// use of continue statement
let b = 10;
for (i = 1 ; i<b ; i++){
    if ( i === 3) continue
    console.log(i); 
}

// While loop Questions
// Repeat hello
let q = 5
let w = 1
while (w<=q){
    console.log("Hello");
    w++
}

// Sum of digits
let e = Math.abs(Number(prompt("Enter a no: ")))
sum = 0
while(e>0){
    rem = e%10;
    sum = sum + rem
    e = Math.trunc(e/10)
}
console.log(sum)

// Reverse of number
let r = Number(prompt("Enter a no to reverse: "))
let rev = 0
while (r>0){
    rem = r%10;
    rev = (rev*10) + rem
    r = Math.trunch(r/10)
}
console.log(rev)

// Automorphic Number
let aa = Number(prompt("Enter your no: "));
let dig = String(aa).length
let sq = (aa*aa)%(Math.pow(10 , dig))
if (aa === sq){
    console.log(`${aa} is an automorphic number`);
}
else{
    console.log(`${aa} is not an automorphic number`);
}

// Strong Number
let z = Number(prompt("Enter a no: "))
let origin = z
let factsum = 0
while(z > 0){
    rem = z%10
    let factrem = 1
    for(i = rem; i >= 1 ; i--){
        factrem *= i
    }
    factsum = factsum + factrem
    z = Math.trunc(z/10)
}
if (factsum == origin) console.log(`${origin} is a strong number`)
else console.log(`${origin} is not a strong number`)