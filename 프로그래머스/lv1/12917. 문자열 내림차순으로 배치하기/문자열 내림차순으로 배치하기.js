function solution(s) {
    let upper = ""
    let lower = ""
    return s.split("").sort((a,b)=> a < b ? 1 : -1).join("")
}