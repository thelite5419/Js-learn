// waprogram to reverse the array without using the inbuilt methods
/*
function reverseArrayToNewArray(originalArray) {
    let reversedArray = [];
    let length = originalArray.length;

    // Iterate through the original array from the end to the beginning
    for (let i = length - 1; i >= 0; i--) {
        reversedArray[length - 1 - i] = originalArray[i];
    }

    return reversedArray;
}

// Example usage
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArrayToNewArray(originalArray);

console.log("Original Array: ", originalArray);
console.log("Reversed Array: ", reversedArray);
*/

//waprogram to reverse the array without using the inbuilt methods
/*const array = [1,2,3,4,5,4,5,47,5,8];
console.log(array);

var start = 0; 
var end = array.length - 1
while(start < end){

    console.log(`start : ${start}, end :${end}`);
    let tmp  = array[start];
    array[start] = array[end];
    array[end] = tmp; 
    
    start++;
    end--;
}

console.log(array);
*/

//wap to implememnt the stack using Array
/*
class Stack {
    constructor() {
        this.stack = []; // Array to hold stack elements
        this.top = -1;   // Initialize top of stack to -1 (empty)
    }

    // Push method to add an element to the stack
    push(element) {
        this.top++;              // Increment the top pointer
        this.stack[this.top] = element; // Add the element at the top position
    }

    // Pop method to remove the top element from the stack
    pop() {
        if (this.top === -1) {   // Check if the stack is empty
            console.log("Stack Underflow");
            return null;         // Return null or handle underflow
        }
        let poppedElement = this.stack[this.top]; // Get the top element
        this.top--;              // Decrement the top pointer
        return poppedElement;    // Return the popped element
    }

    // Peek method to view the top element without removing it
    peek() {
        if (this.top === -1) {   // Check if the stack is empty
            console.log("Stack is empty");
            return null;
        }
        return this.stack[this.top]; // Return the top element
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.top === -1;
    }
}

// Example usage
let myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log("Top element is: ", myStack.peek());  // Output: 30
console.log("Popped element: ", myStack.pop());   // Output: 30
console.log("Popped element: ", myStack.pop());   // Output: 20
console.log("Is stack empty? ", myStack.isEmpty()); // Output: false
console.log("Popped element: ", myStack.pop());   // Output: 10
console.log("Is stack empty? ", myStack.isEmpty()); // Output: true
*/

//wap to find the max value of the given number

// var number = 4541;
// const temp = number;

// for (let i = 9; i > 0; i--) {
//   number = temp;
//   console.log(number);

//   while ((number = 0)) {
//     console.log("Number::", number);

//     if (number % 10 == i) {
//       var highNumber = highNumber * 10 + (number % 10);
//       console.log("highNumber ::>", highNumber);
//     }
//     number = number / 10;
//   }
// }
// console.log(highNumber);

// function Person(name) {
//     this.name = name;
//     this.age = 21;
//   }
//   var object = new Person("Sudheer");

//   console.log(object);
  

  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  var object = new Person("Sudheer");
console.log('object :>> ', object);