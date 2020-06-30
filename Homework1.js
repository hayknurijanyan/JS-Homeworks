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