// Homework 4

//ec 1

function rem(array){

let res=[];
if(!array.index)
    array.index = 0; 
if(array.length>1){
    if (array.index<array.length-1){
        array[array.index]=array[array.index+1];
        array.index++;
        return rem(array);
    }
    else{
        array.index = undefined;
        array.length--;
        return array;
    }
 }
 array.index = undefined;
 return res;
 }

rem([1,2,3,4,5])

// ex 2


let obj1 = {
  a: 1,
  b: 2,
  c: 2,
  d: 3
  
}

function invert (obj) {
  let result = {};
  
  for (let key in obj){
    
   if(!result[obj[key]])
   {
    result[obj[key]] = key
   } else 
   
     
  }
 return result
}

console.log(invert(obj1))


///// ex 3


obj1 = [
{ book: "Catcher in the Rye", readStatus: true, percent: 40},
{ book: "Animal Farm", readStatus: true, percent: 20},
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "The Fall&quot", readStatus: true, percent: 50 },
{ book: "White Nights", readStatus: false, percent: 60 } ,
{ book: "After Dark", readStatus: true, percent: 70 }
];


For.Each function check (array){
  let newarray = [];
  for.Each (newarray.readStatus === true){
    newarray =array.push()
  }
}


