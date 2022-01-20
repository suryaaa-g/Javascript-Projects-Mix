// The return keyword

// Example 1
// function sum(a, b) {
//   return a + b;
// }
// // console.log(sum(10, 12));

// let sumNums = sum(10, 12);
// console.log(sumNums);

// Example 2
// function checkScore(currentScore, passingScore) {
//   if (currentScore >= passingScore) {
//     return "Passed";
//   } else {
//     return "Failed";
//   }
// }
// let result = checkScore(90, 55);
// let result = checkScore(85, 55);
// let result = checkScore(55, 55);
// let result = checkScore(45, 55);
// let result = checkScore(54, 55);
// console.log(result);

// Shorter Version
function checkScore(currentScore, passingScore) {
  if (currentScore >= passingScore) {
    return "Passed";
  }
  return "Failed";
}
// let result = checkScore(90, 55);
// let result = checkScore(85, 55);
// let result = checkScore(55, 55);
// let result = checkScore(45, 55);
let result = checkScore(54, 55);
console.log(result);
