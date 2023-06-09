function solution(cipher, code) {
    return [...cipher].reduce((acc,cur,i)=>(i+1)%code===0?acc+=cur:acc,"")
}