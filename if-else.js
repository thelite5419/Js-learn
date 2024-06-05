//when the x is undefined
let x;
if(x == null)
{
    console.log("the x has no value");
}

if(x!= null){
    console.log("the x has some value");
}
console.log("-----------------------------------");
//when the x is defined as null 
x = null;
if(x == null)
{
    console.log("the x has no value");
}

if(x!= null){
    console.log("the x has some value");
}
console.log("-----------------------------------");
//when the x is 0 
x = 0;
if(x == null)
{
    console.log("the x has no value");
}

if(x!= null){
    console.log("the x has some value");
}
console.log("-----------------------------------");

//when the x is string 
x = 'abs';
if(x == null)
{
    console.log("the x has no value");
}

if(x!= null){
    console.log("the x has some value");
}
console.log("-----------------------------------");

//when the x is null and comparing it with the 0 
x = null;
if(x < null)
{
    console.log("the x has no value");
}

if(x > null){
    console.log("the x has some value");
}