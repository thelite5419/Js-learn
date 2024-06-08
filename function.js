// function num (a, b){
//   let c = a+b
//   return c;
// }

// const { log } = require("console")

// console.log(num(2, 5));

// const result = num (5,5)
// console.log(result)

// function isLoggedIn(user){
//   if (user === undefined)
//     {
//       console.log(`not logged in`)

//     }
//     else{
//       console.log(`${user} logged in`);
//     }
// }

// isLoggedIn();

// used when we want to give some default value to it. we specify tha name in the parameter

// function isLoggedIn(user = 'thelite'){
//   if (user === undefined)
//     {
//       console.log(`not logged in`)

//     }
//     else{
//       console.log(`${user} logged in`);
//     }
// }

// isLoggedIn();

//Rest Operator
// function calculator(...num) {
//   return num;
// }

// console.log(calculator(1,2,3,5,7));

//it will add the values in array dynamically and we have to process it further

//handling the object with the function
// const user = {
//   id: 101,
//   name: "that",
// };

// function handleObject(any) {
//   console.log(`${any.id} is the id `);
// }

// handleObject(user);



//handling the Array in the function 
const myArray = [1,2,6,4]

function getTheArray (any){
  return  any[1]; 
}

console.log(getTheArray(myArray));