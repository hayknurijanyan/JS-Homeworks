// Homework 2

// Ex 1
let arr = [1,2,3,4,5,6,7,8,9,0];


function getlargest (num,array) {
   let newarray =[];
  let result = "Such values do not exist."

   for (i=0; i<array.length; i++){
    if (array[i]>num) {
    newarray.push(array[i]);
      result = newarray;
    }
   } return result
}
console.log (getlargest( 2,arr))


// ex 2
var num1 = 19
var num2 = 42

function findEven (num1,num2) {
  var even = true
  var arr2 = []
 for (i=num1; i<=num2; i++) {
   while (i>1){
     var temp1 = i
     var temp2 = i % 10
     if (temp2 % 2 ==1){
       even=false
       break
} else
{
  temp2=0
  i=Math.floor(i/10)
}

   }if(even==true)
    arr2.push(temp1)
     } 
  return arr2
}  
console.log(findEven(19,42))




// ex3

let arr1 = [1,2,3,4,5,6,3]

function findIndex (array){
  let result = -1; 
     
  for (i=array.length; i>0; i--){
    if (array[i]<array[i-1]){

     result =i ;
    }
  }return result

}
console.log (findIndex(arr1))



// ex 4

let arr1 = [1,2,3,33,10,6,7];

function findLargestProduct (array){
  let result = -1;
  for (let i=0; i<array.length; i++){
    if (array[i]*array[i+1]<array[i+1]*array[i+2]){
      result = array[i+1]*array[i+2]
    }
  }return result
}
console.log(findLargestProduct(arr1))





//ex 5

function missingEmCount (array) {
  
 let result = Math.max(...array) - Math.min(...array) - (array.length - 1);

  return result
}

console.log (missingEmCount([1,7]))



//ex 7 (not finished)

let arr1 = [5,4,78,0,-3,7]

let a = function removeEven (arr1){
 let newarray =[];
  for (let i=0; i<array.length; i++){
    if (array[i] % 2 !==0){
      newarray.push(array[i])
    }
  } return newarray
}  


  function product (array){

  let arr2 =[];
  for (let i=0; i<array.length; i++ ){
    arr2.push(array[i]*array.length+1)
  } return arr2 
} 


 
console.log (product(a))



