//this is the overview of how the datatypes works in javascript and using the typeof operator we can see the what kind of data that the variable posses
      var x = 100;
      console.log(x);
      console.log(typeof x);
      console.log("----------------------")

      x = "mahesh";
      console.log(x);
      console.log(typeof x);
      console.log("----------------------")

      x = true;
      console.log(x);
      console.log(typeof x);
      console.log("----------------------")

      x = null;
      console.log(x);
      console.log(typeof x);
      console.log("----------------------")

      x = undefined;
      console.log(x);
      console.log(typeof x);
      console.log("----------------------")

      her = "this"
      console.log('her :>> ', her);
      console.log("----------------------")

      console.log("type conversion");
      console.log("----------------------")
      let number = "33"
      console.log('typeof number :>> ', typeof number);
      let convertedNumber = Number(number);
      console.log('typeof convertedNumber :>> ', typeof convertedNumber);

      console.log("type conversion having the character inbetween");
      console.log("----------------------")
      let number1 = "33abc"
      console.log('typeof number1 :>> ', typeof number1);
      let convertedNumber1 = Number(number1);
      console.log('typeof convertedNumber1 :>> ', typeof convertedNumber1);
      console.log('convertedNumber1 :>> ', convertedNumber1);

//when we convert the number having strings to number it shows its type in the number but we check is value it is NaN(not a Number)
/*
"33" = number
"33abc" = Nan
"true" = value 1
"false" = value 0
null = 0
*/