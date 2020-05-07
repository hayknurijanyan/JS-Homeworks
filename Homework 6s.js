// Homework 6


/* ex 1 (recursive solution, using slice method)

  Given an array. Determine whether it consists
  only from unique elements or not. */

let arr1 = [1,2,3,4,5,6]

let arr2 = [1,2,8,6,7,2,1,3,4,2,4,5]

function unique (arr) {
 let result = 0;
  if (arr.length<=1){return true}
 
   for (let i=1; i<=arr.length; i++){if(arr[0]===arr[i]){return false}}
    return unique(arr.slice(1,arr.length))
}

console.log(unique(arr2))


/* ex 2 (using array.reduce method)
Given an array of numbers.
Find the sum of numbers’ quadratic which are even.
Գտնել զույգ թվերի քառակուսի արմատների գումարը*/

let arr1 = [1,16,5,18,36,8,9];

function sum(arr){
let result = 0;

for (let i =0; i<=arr.length; i++){
	if (Math.sqrt(arr[i]) % 2 ===0){result +=arr[i]} 
  } 

return result
}
console.log(sum(arr1))



/* ex 3  
 Check String Palindrome */

function checkPalindrome(string) {
let reversed = ""; 

for(let i=string.length-1;i>=0; i--){
 reversed += string[i]

}
 if (reversed ===string){return true}
 else return false
}
checkPalindrome("aabbbaa")


/* ex 4
 Given a word and a list of possible anagrams,
 select the correct sublist.
*/
function findAnagram(str,arr){
  let result = [];
  str=str.split("").sort().join("");

  for (let em of arr){
  	if (em.split("").sort().join("")=== str){result .push(em)}

  }
 return result;
}

