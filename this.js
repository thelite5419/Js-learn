const user =  {
userName : 'prathamesh07',
id : "thelite",

welcomeMessagr : function (){
  console.log(`welcome ${this.userName} to the website`); // used to refer the currunt context 
  console.log(this);
}
}

user.welcomeMessagr();
// changing the currunt context 
user.userName = "vankatesh"//chnaging the currunt context and seeing the value 
user.welcomeMessagr(); // it will give the new currunt value that is been allocated 

console.log(this) // this will result in the empty curly braces cause we are  running this into the node enviroment but in the case of the running this in the webpage console it will give the currunt context of the webpage

console.log(this) // run this in the webpage console