///Homework 3

////ex1 

function numToDigits (number) {
debugger
   let array =number.toString();
   let digits= array.split('')
   let i = digits.length

    if(i==1 & digits.pop()%2!==0){return true}
    if(i==1 & digits.pop()%2===0){return false}



    else if (i>1){
    if(digits.pop()%2!==0){
 
    return (numToDigits(Math.floor(number/10)))
  }
} return false
} 

console.log(numToDigits(132543))


// ex 2

function min(numArray) 
{

  let  nums = numArray.slice();

    if (nums.length == 1 && nums[0]>0) { return nums[0]; }
    if (nums.length == 1 && nums[0]<0) { return -1; }


      if (nums[0]>0 && nums[0]<nums[1]) {nums.splice(1,1)}
  else if(nums[1]>0) {nums.splice(0,1)}
  else {nums.splice(1,1)}


    return min(nums)
}


console.log(min([-11,-8,1,-6,-77]))



// ex 3


function fib(n) {
    if (n < 2) {
        return [1]   
    }
    if (n < 3) {
        return [1, 1]
    }

    let arr = fib(n - 1)
    arr.push(arr[n - 2] + arr[n - 3])
    return arr
}

console.log(fib(6))

///ex 4

function flatten(array, result) {
  if (array.length === 0) {
    return result
  }
  let first = array[0]
  let rest = array.slice(1)
  if (Array.isArray(first)) {
    return flatten(first.concat(rest), result)
  }
  result.push(first)
  return flatten(rest, result)
}
  
  console.log(flatten([[1,2,3],[[4,5],6,[7,8,9]]], []))