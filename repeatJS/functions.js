function add(n1, n2) {
  console.log(n1+n2)
}
add(1,2);
add (1, null);
add(5, '8');
add(4, undefined);
add(5, 5, 5);

function minus(n1) { // returning a value and storing it 
  return n1;
}
let minus1 = minus(5);

 console.log('minus :>> ', minus1);

 
function div(n1) { // after the return the reamining statement is not executed
  return n1;
  console.log('n1 :>> ', n1);
}
let div1 = minus(5);

 console.log('div :>> ', div1);


 function returnString(username) { // returning the string
  return `${username} is returned`
 }

let string =  returnString("gauri")
 console.log('returnString() :>> ', returnString("prathamesh"), 'AND', string);


 function login(username , password){ // password login 
  if(!username || !password){
    console.log(`the username is ${username}, paswword is ${password}`);
    return;
  }
  else{
    return `the ${username} is succesfully logged in`;
  }
 }

let isLoggedIn = login('prathmesh', '123');
console.log('isLoggedIn :>> ', isLoggedIn);

function login1(username = 'default'){ // passing deafault valeus as parameter
  if(!username){
    console.log(`the username is ${username}`);
    return;
  }
  else{
    return `the ${username} is succesfully logged in`;
  }
 }

let isLogged = login1();
console.log('isLoggedIn :>> ', isLogged);

function calculateCartPrice(...num1) { // adding multiple values in the single param 
  return num1
}

console.log('calculateCartPrice(2) :>> ', calculateCartPrice(2, 2, 5, 8));


function calculateCartPrice(val1, val2, ...num1) { // multiple params with rest param
console.log('val1, val2, num1 :>> ', val1, val2, num1);
  return {val1, val2, num1};
}

let {val1, val2, num1} =  calculateCartPrice(2, 2, 5, 8)

console.log('val1, val2, num1 :>> ', val1, val2, num1);


const user = {
  username : 'prathamesh', 
  prize : 'allo'
}

function userObj(userobject) {
  console.log(`usernme is ${userobject.username}`);
}

userObj(user); // passing object
userObj({ // making own object 
  username : 'sam'
})


const array = [100, 200, 300] // passing array to function 
function returnInfo(getinfo) { // getting from array 
  return getinfo[1]
}

console.log(returnInfo(array));


