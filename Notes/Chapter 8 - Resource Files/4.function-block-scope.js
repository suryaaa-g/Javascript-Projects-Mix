// *-*-*-*-*-*-*-*-- Variable Function Scope --*-*-*-*--*-*-*-*
/* Variable Declaration => let, const vs var
let
const
var
*/

// let
// function myFunc() {
//   let myName = "Muslim";
//   console.log(myName);
// }
// myFunc();
// console.log(myName);

// const
// function myFunc() {
//   const myName = "Muslim";
//   console.log(myName);
// }
// myFunc();
// console.log(myName);

// var
// function myFunc() {
//   var myName = "Muslim";
//   console.log(myName);
// }
// myFunc();
// console.log(myName);

// *-*-*-*-*-*-*-*-- Variable Block Scope {} --*-*-*-*--*-*-*-*

// let
let result = 25;
if (2 > 1 && 1 < 3) {
  let result = true;
  console.log(result);
}
console.log(result);

// const
// if (2 > 1 && 1 < 3) {
//   const result = true;
//   console.log(result);
// }
// console.log(result);

// var
// var result = 15;
// if (2 > 1 && 1 < 3) {
//   var result = true;
//   // console.log(result);
// }
// console.log(result);
