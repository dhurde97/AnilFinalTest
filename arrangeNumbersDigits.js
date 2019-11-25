/*
Input: [1,2,e,3,4,a,b,5,6,7]
Return a list with all numbers coming first and then characters.
Output- [1,2,3,4,5,6,7,a,b,c,e]
The numbers and characters needs to be sorted in the list itself.
*/

let arr= [1,2,'e',3,4,'a','b',5,6,7];
let arr1=[];
let arr2=[];
arr.forEach(element=>{
    if(isNaN(element)){
        arr1.push(element);

    }
    else{
        arr2.push(element);
    }

})

arr1.sort();
arr2.sort();

console.log(arr2.concat(arr1)); 
