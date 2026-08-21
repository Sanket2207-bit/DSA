let arr = [1,2,3,4,5,6]
let n = Number(prompt("Enter a number to push in into an array: "))
arr.push(n)
console.log(arr)
/* 
arr.push = add value at last place
arr.pop = remove last place value
arr.shift = remove first place value
arr.unshift = add value at first place
*/

// Sum of an array
let arr1 = [1,213,4,2,1,2,3,4,983,82]
let sum = arr1.reduce((acc , num) => acc + num , 0);
console.log(sum)

// Max element of an array
let arr2 = [1 , 72 , 727 , 2898 ,0 , 976545 ]
let maxarr2 = Math.max(...(arr2))
console.log(maxarr2)

// Second max element from array
let arr3 = [1,342,2341,3,213,4,52,1 , 75678]
let maxindex = arr3.indexOf(Math.max(...(arr3)))
arr3.splice(maxindex , 1)
let max2 = Math.max(...(arr3))
console.log(max2)

// Reverse the array
let arr4 = [0,1,23,4,54]
let rev = []
for(i = arr4.length - 1 ; i>=0 ; i--){
    rev.push(arr4[i])
}
console.log(rev)

// All zeroes to left and all ones to right
let arr5 = [1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0];
let newarr = []
for(const value of arr5){
    if(value/1 == 0 ){
        newarr.unshift(value)
    }
    else{
        newarr.push(value)
    }
}
console.log(newarr);
