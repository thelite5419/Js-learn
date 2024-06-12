//scope means the accesability of the variable in the program 

let a = 10; //scope is is allocated till the curly braces (block scope)
var b = 50; // it is acessible in the whole program (not recomended)(globle scope)
const c = 60; //it is like a fixed value if it declared outside any scope then it cannot be chnage except when it is declred inside the block scope then it can be changed but it is only remain inside that scope

// console.log(`${a}, ${b}, ${c}`);


// if the const and let is declared in both the global and block scope then the block scope is changable but only inside that scope

let fixed = 100
const pi = 3.14;

// if(true){
//   let fixed = 50;
//   const pi = 50 ;
//   console.log(`let inside the block scope : ${fixed}  \n const inside the block scope : ${pi}`);
// }
// out side the block scope value at the inital are considered
// console.log(`let outside the block scope : ${fixed}  \n const inside the block scope : ${pi}`); 
// we have to declare them inside the block if we dont want to change the gloable value 
//after we declare them inside the scope thier scope remain till the block scope and they dont change the global value 
// let can be used as it is but it will chnage the gloable value 
//but the const need to be declare if we want to use them  

//global scope is different in the both webpage and node 


console.log(addone(5));
function addone (num){
 return num+1;
}

 
console.log(addtwo(5));
let addtwo = function addtwo (num){
  return num+2;
 }

 
