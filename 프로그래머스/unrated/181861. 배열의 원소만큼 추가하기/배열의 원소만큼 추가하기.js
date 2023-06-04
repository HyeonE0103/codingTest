// function solution(arr) {
//   return arr.reduce((acc, cur) => {
//     for (let i = 0; i < cur; i++) acc.push(cur);
//     return acc
//   }, []);
// }
function solution(arr) {
  return arr.reduce((acc, cur) => [...acc, ...new Array(cur).fill(cur)], []);
}