function solution(arr) {
    let N = arr.length
    return arr.every((r,i)=>r.every((_,j)=>arr[i][j] === arr[j][i])) ? 1 : 0
}