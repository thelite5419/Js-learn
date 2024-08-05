var a = 100; 
let b = 200; 
const c =  100;

if (true) {
  var a = 10; 
  let b = 20; 
  const c = 30;
  
  console.log('Inner a :>> ', a);
  console.log('Inner b :>> ', b);
  console.log('Inner c :>> ', c);
}

console.log('a :>> ', a); // value changed for this cause of if
console.log('b :>> ', b);
console.log('c :>> ', c);
console.log('-------------------------------------------------');

function user() {
  const username = 'prathamesh'; 
  // console.log('password :>> ', passwordName); // cant be accesed ::: ReferenceError: passwordName is not defined
  function password() {
    const passwordName = '#123eg'
    console.log('passwordName :>> ', passwordName);
    console.log('username :>> ', username); // can access the parent function variable
  }
  password()
  // console.log('password :>> ', passwordName); // cant access form child function scope 
}

user()


console.log(' -------- unique comcept -------- ');

console.log('addOne(5) :>> ', addOne(5)); // can be accesesd when we declared before its execution 

function addOne(num){
  return num + 1;
}


const addThree = function addThree(params) {
  return params  + 2;
}

console.log('addThree(5) :>> ', addThree(5)); 


console.log('addTwo(5) :>> ', addTwo(5)); //Cannot access 'addTwo' before initialization
 const addTwo = function addTwo(params) {
  return params  + 2;
 }
