// function solution(money) {
//     return [parseInt(money/5500), money%5500]
// }

// function solution(money) {
//     return [Math.floor(money/5500), money%5500]
// }

function solution(money) {
    return [~~(money/5500), money%5500]
}