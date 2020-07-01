/* ex 2
 Given an array of numbers. Print frequency of each unique number. (Frequency is the
 count of particular element divided by the count of all elements)*/
arr1 = [1,1,2,2,3]


function frequency (arr,number){
  let count =0;
  for (let i =0; i<=arr.length; i++){
    if (arr[i] === number){count+=1}
    }
  return `${number}: ${count/arr.length}`
  }

console.log(frequency(arr1,1))
console.log(frequency(arr1,2))
console.log(frequency(arr1,3))


/* ex 3
Given an array of strings and numbers.
Print the number of integers and the number
of strings in the array.
*/

let arr1 = [1,2,'hi',8,'11',3]

function numberAndStringCount (arr){
  let number =0;
  let string =0;
  for (let i=0;i<=arr.length; i++){
      if (typeof arr[i] === 'number'){number+=1}
      else if (typeof arr[i] === 'string'){string+=1}
  } return `Numbers:${number} Strings:${string}`
}

console.log(numberAndStringCount(arr1))



/*ex 4
Write a function that accepts a string(a sentence) as a parameter and finds the longest
word within the string․ If there are several words which are the longest ones, print the
last word(words can be separated by space, comma or hyphen).
*/
let string1 ="A revolution without dancing is a revolution not having"

function findLongestWord(string){
    let arr= string.split(' ').join().split('-').join().split(',');
    let longestWord = "";
    for (let i=0; i<arr.length;i++){
        if(arr[i].length>=longestWord.length){
            longestWord=arr[i]
        }
    }
    return longestWord  
}

console.log(findLongestWord(string1))
