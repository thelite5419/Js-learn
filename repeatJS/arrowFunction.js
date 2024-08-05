//this and arrow keyWord 

//this keyword used to know current context of the function object and global env.

const user ={ 
  useranme : 'prathmesh', 
  welcome : function(){ 
    console.log(this);
    console.log('this.username :>> ', this.useranme);
  }
}
user.welcome();

user.useranme = 'gauri'; // changing the values means current context of the object 
user.welcome()


function user1(){
  console.log('this :>> ', this);
  let userName = 'prathamesh'
  console.log('this.userName :>> ', this.userName); // cant print the scope values of the functions
}
user1();

console.log('-------- Arrow Function ---------');


const user2 = () =>{ // arrow funtion 
  console.log('this :>> ', this);
  let userName = 'prathamesh'
  console.log('this.userName :>> ', this.userName); // cant print the scope values of the functions
}
user2();

let anything = () => {} // arrow function syntax 

let addValue = (add1, add2) => { // when the curly braces is used return is mandotory 
  return add1+add2
}
console.log('simple arrow function', addValue(1,2));

let addAny = (add1, add2) => (add1 + add2 ) // we can skip the return 
console.log('without curly braces and return', addAny(1,2));

let addSuch = (add1, add2) => add1 + add2  // we can also skip the paranthesis if we are writing the Arrow Function
console.log('in one line', addSuch(1,2));