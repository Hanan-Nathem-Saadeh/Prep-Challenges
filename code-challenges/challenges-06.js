'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  
const findMax =(arr)=>
{
    var max = arr[0];
    for(let i=0;i<arr.length;i++)
    {
if (arr[i]>max)
{max=arr[i];
   
}
    }
return max;


}
// const findMax = (arr)=>{
//     let max;
//     // write your code here
//     return max;
// }
// // -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr) =>
{
let sum = 0;
for(let i=0;i<arr.length;i++)
{
    let numberType= typeof(arr[i])
if (numberType == "number" )
{
sum = sum + arr[i];
}

}
return sum;

}
// const sumNums = (arr)=>{
//     let sum;
//     // write your code here
//     return sum;
// }
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']



const reverseArray = (array)=>
{
    let revercedArray=[];

for(let i=array.length-1;i>=0;i--)
{
    revercedArray.push(array[i]);
}
return revercedArray;
}



const revercedArray = (arr)=>{
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};


