// singleTon 


const jsObject = {
  name : "hii", 
  id : 121,
  mobile_no : 7028345419,
  email : 'prathameshpise6@gmail.com', 
  'full name' : "prathamesh pise"
}

console.log(jsObject['name']);
console.log(jsObject.id);
console.log(jsObject['full name']);

jsObject.email = "abc@.com";
console.log(jsObject['email']);

Object.freeze(jsObject);

jsObject.id = 101;
console.log(jsObject.id);

let jsObjectOne = {
 name : 'prathamesh' , 
 id : 1010
}

jsObjectOne.hello = function () {
  console.log("this is function inside the object");
  console.log(`accessing the keys through this function ::> ${this.id}`);
}

console.log('jsObjectOne :>> ', jsObjectOne.hello());

console.log('========================================================');

// defining the obejct in the singleton
let tinderUser = new Object();

tinderUser.id = 100;
tinderUser.name = 'prathamesh';

console.log(tinderUser);

tinderUser = {
  'full name' : {
   name : {first : 'prathamesh', 
    middle : 'anil', 
    last : 'pise'}
  },
}

console.log(tinderUser['full name'].name.first);

let obj1 = {1: 'one', 2: 'two'};
let obj2 = {1: 'one', 2: 'two'};
let obj3 = {obj1, obj2}
console.log('obj3 :>> ', obj3);

let obj4 = Object.assign(obj1, obj2)
console.log('obj4 :>> ', obj4);// avoids the duplication, result  obj4 :>>  { '1': 'one', '2': 'two' }

obj2 = {3: 'three', 4: 'four'};
obj4 = Object.assign(obj1, obj2);
console.log('obj4 :>> ', obj4); // result ::: obj4 :>>  { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

let obj5 = {...obj1, ...obj2, ...obj3, ...obj4} // merging the objects through the spread opeartor
console.log('obj5 :>> ', obj5); /*result ::: obj5 :>>  {
                                                      '1': 'one',
                                                      '2': 'two',
                                                      '3': 'three',
                                                      '4': 'four',
                                                      obj1: { '1': 'one', '2': 'two', '3': 'three', '4': 'four' },
                                                      obj2: { '1': 'one', '2': 'two' }
                                                    } */
console.log('Object.keys(tinderUser) :>> ', Object.keys(tinderUser));
console.log('Object.values(tinderUser) :>> ', Object.values(tinderUser));

console.log('tenderUser.hasOwnProperty(name) :>> ', tinderUser.hasOwnProperty('full name'));

console.log('--------------------------------------------------------------------------------');

//destructuring 
const course = {
  theFullNameIs: "thelite",
  id : 101
}
const {theFullNameIs : smallName} = course; // destructuring :: used when  we want to get the value constantaly
console.log('smallName :>> ', smallName);

