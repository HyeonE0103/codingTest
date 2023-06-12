// function solution(absolutes, signs) {
//   let answer = 0;
//   for (i = 0; i < absolutes.length; i++) {
//     signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
//   }
//   return answer;
// }

// function solution(absolutes, signs) {
//   let result = 0;
//   absolutes.map((x, i) => {
//     signs[i] ? (result += x) : (result -= x);
//   });
//   return result
// }

// function solution(absolutes, signs){
//     return absolutes.reduce((acc,cur,i)=>signs[i]?acc+=cur:acc-=cur,0)
// }

const solution = (abs, sig) => abs.reduce((acc,cur,i)=>sig[i]?acc+=cur:acc-=cur,0)