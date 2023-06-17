function solution(s) {
    let bool = (s.length === 4 || s.length === 6)
    let num = s.split("").reduce((acc,cur)=>!isNaN(cur)?acc+=cur:acc,"").length
    return (num === s.length) && bool
    
}