// const sym = Symbol("key1");

// const { Obj } = require("prelude-ls");

// const JsUser = {
//   Fname : 'prathamesh',
//   id : 101,
//   age : 20,
//   [sym] : "key1",
//   email : 'prathameshpise6@gmail.com',
//   "name IS" : "thelite"
// }

// console.log(JsUser.id);
// console.log(JsUser.Fname);
// console.log(JsUser["Fname"]);
// console.log(JsUser["name IS"]);
// console.log(JsUser["sym"]);


// JsUser.email = 'he'
// Object.freeze(JsUser);
// JsUser.email = 'sf'
// console.log(JsUser);

// const instaUser = new Object(); // singleton object 
//  const instaUser = {} // non singleton object

// instaUser.id = "thelite_editx"; //changing object value
// instaUser.email = "theprathamesh07@gmail.com"; //changing object value
// instaUser.isLoggedIn = false; //changing object value

// console.log(instaUser);

// //object inside object 

// const regularUser= {
//   id  : "thelite_code",
//    name: {
//     fname : "prathamesh",

//   }
// }

// console.log(regularUser);
// console.log(regularUser.name.fname); // accessing the pbject inside object

//combining the both object
//const obj3 = Object.assign(obj1 , instaUser);

//when we have multiple objects 
//obj3 = Object.assign({} , obj1, obj2 , instaUser);

//another way to assign the multiple object to a single object using the spread operatoe
//const obj = {...instaUser, ...obj3}

//object inside the array 

// const arr = [
//   {
//     id : 1,
//     name : "nam"
//   },

//   {
//     lname : "Head",
    
//   }
// ]

// console.log( arr[0].name);

//to check if the property is presernt in the array or not 
// const arrprop  = {
//   id : 101,
//   email: "the"
// }

// console.log(arrprop.hasOwnProperty('has'));


//DE-STRUCTURING

// const course = {
//   name: "the",
//   id : 101
// }
// const {name} = course;
// console.log(name);

// {
// 	"name": "ABC",
// 	"id": "101",
// };