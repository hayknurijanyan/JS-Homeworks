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

function binarySearch(arr,value){
  let high = arr.length-1;
  let low = 0;
  let mid = 0;   
  
  while (low <= high){
    mid = Math.floor((high+low)/2)
    if(arr[mid] == value){
      return arr.indexOf(arr[mid],0);
    } else if (value >arr[mid]){
      low = mid+1
    } else {
      high = mid-1
    }
  }  
  return "not exist"
}

binarySearch([3,5,7,8,9,23,33,45,67,78,88,89,123],33)
