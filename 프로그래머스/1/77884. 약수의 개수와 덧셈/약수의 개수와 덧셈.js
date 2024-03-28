function solution(left, right) {
    let result = 0
    for(let i=left; i<=right; i++){
        let n = Math.sqrt(i)
        n === Math.floor(n) ? result-=i : result+=i
    }
    return result
}