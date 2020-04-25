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

