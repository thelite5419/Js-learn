// sometimes pollution happens cause of the globle scope to avoid this we use the iife

// how it is used

// function one() {
//   console.log("w/o iife");
// }
// one();

(function two() {
  console.log("w iife");
})();
  // it is genarally used to speed up the execution and avoids the global scope pollution
  // two braces is used ()()first one wraps the function inside it and the second one is used as the caller that calls the function unlike the regular fucntion where we call the functino using its name here we only add the empty braces a;ong with the wrapped funtion

  // if you want to pass the parameters to the iife function it will goes like

  ((name) => 
    { console.log(`this is the name : ${name}`);
})('pratahamesh');
