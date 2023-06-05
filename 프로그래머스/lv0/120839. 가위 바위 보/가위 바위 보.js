function solution(rsp) {
    return [...rsp].reduce((acc,cur)=>cur === "2" ? acc += "0" : cur === "0" ? acc += "5" : acc += "2","")
}