const myArr = [1,2,3,4,5];
console.log('myArr :>> ', myArr);
console.log('myArr :>> ',typeof myArr);
console.log('myArr[1]:>> ',myArr[1]);

myArr.push('hello')

console.log('PushmyArr :>> ', myArr);

myArr.pop()

console.log('PopmyArr :>> ', myArr);

myArr.unshift("UnShift");
console.log('UNSHIFTmyArr :>> ', myArr);

myArr.shift();
console.log('SHIFTmyArr :>> ', myArr);

console.log('myArr.includes(1) :>> ', myArr.includes(1));

console.log('myArr.indexOf() :>> ', myArr.indexOf(5));

let newArr = myArr.join();

console.log('newArr :>> ', newArr);


let mynArr1 = myArr.slice(0,3);
console.log('mynArr1 :>> ', mynArr1);
console.log('A myArr :>> ', myArr );


let mynArr2 = myArr.splice(0,3);
console.log('mynArr2 :>> ', mynArr2);
console.log('B myArr :>> ', myArr);

console.log("************************************************************");

let arrayOne = [1,2,3];
let arrayTwo = [4,5];
arrayTwo.push(arrayOne);

console.log('arrayOne :>> ', arrayOne);
console.log('arrayTwo :>> ', arrayTwo);
console.log('arrayTwo[2][1] :>> ', arrayTwo[2][0]);

let arrayThree = [7,8,9];

let concateArr = arrayThree.concat(arrayOne)
console.log('concateArr :>> ', concateArr);
//only one array can concat

//spread operator 
let marvel = ['iron man', 'captain america', 'Hulk'];
let dc = ['batman', 'superman'];
let indianHeros = ['krishh', 'minnal murali', 'bhavesh joshi']

let heros = [...marvel, ...dc, ...indianHeros];
console.log('heros :>> ', heros);
// can add more than 2 3 arrays 

//
const mixedArray = [1, 1, [2, 2], [4, 4, [3, 3]]];
const separatedArr = mixedArray.flat(Infinity);
console.log('separatedArr :>> ', separatedArr);

let one = 100;
let two = 200;
let three = 300;

console.log(Array.of(one, two, three));

console.log(Array.from("prathamesh"));

console.log(Array.from({name : "hii"}));
console.log(typeof Array.from({name : "hii"}));