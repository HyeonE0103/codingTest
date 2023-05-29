// function solution(array, height) {
//     return array.reduce((acc, cur) => {
//     height < cur ? acc++ : acc
//     return acc;
//   }, 0);  
// }

function solution(array, height) {
    return array.filter(x => height < x).length 
}