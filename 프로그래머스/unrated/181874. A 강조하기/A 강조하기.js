function solution(myString) {
    return [...myString].reduce((acc,cur)=>cur === "a" || cur === "A"? acc+=cur.toUpperCase():acc+=cur.toLowerCase(),"")
}