//Homework 5



// find index

/*
let arr1 = [];


  function getIndex (arr,el){
    let newarr =[];
    let result = "not exist"
    
    for (let i=0; i<=arr.length; i++){
      if (arr[i]==el){result = newarr; newarr.push(i)}
    } return result
    }

getIndex(arr1,2)
*/


// binary search
let arr1 = [1,2,3,3,4,5,6,7,8,9,0];
function binarySearch(arr,value){

  let high = arr.length-1;
  let low = 0;
  let mid = 0;
  let array=[] 
  
  while (low <= high){
    mid = Math.floor((high+low)/2)
    if(arr.indexOf(value) == mid){
            array.push(mid)
            for(let i=mid+1; i<arr.length;i++){
            if(arr[i]===arr[mid]){
                array.push(i)
            }
            }
      return array
    } else if (value >arr[mid]){
      low = mid+1
    } else {
      high = mid-1
    }
  }  
  return "not exist"
}

console.log(binarySearch(arr1,3))
