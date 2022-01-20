//*****Function Expressions
// let calcNums = function (z, w) {
//   return (z + w) / (z - w);
// };
// console.log(calcNums(15, 25));
// console.log(calcNums(50, 25));

//*****Functions in Arrays

function avgMikeScore(score, mikeScore) {
  return (mikeScore + 5) / score;
}

let avgJoeyScore = function (score, joeyScore) {
  return joeyScore / score;
};

// const scores = [avgMikeScore, avgJoeyScore];

// console.log(scores);

// for (let i = 0; i < scores.length; i++) {
//   let result = scores[i](100, 20);
//   console.log(result);
// }

// for of loop
// for (let avgScore of scores) {
//   let result = avgScore(100, 20);
//   console.log(result);
// }

//*****Functions as Object Properties
const scores = {
  mikeScore: avgMikeScore,
  joeyScore: avgJoeyScore,
};

console.log(scores.mikeScore(100, 20));
console.log(scores.joeyScore(100, 50));
