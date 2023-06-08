function solution(arr, n) {
    return arr.map((x,i)=>arr.length % 2 === 0 ? i % 2 !== 0? x+n: x : i % 2 === 0 ? x+n : x)
}