function solution(s){
    let num = 0
    for(let el of s){
        num += el === "(" ? 1 : -1
        if(num < 0) return false
    }
    return num === 0 ? true : false
}