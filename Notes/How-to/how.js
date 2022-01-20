//How to parse ints from file

const numbers  = "1 2";

let numArray = numbers.split(" ");



for(let i = 0; i < numArray.length; i++){
   parseInt(numArray);
    
}

var num1 = parseInt(numArray[1]);
console.log(typeof(num1))
console.log(numArray[0] + " " + numArray[1]);
console.log(typeof(num1) + " 2")


//console.log(typeof(newb[1]));


