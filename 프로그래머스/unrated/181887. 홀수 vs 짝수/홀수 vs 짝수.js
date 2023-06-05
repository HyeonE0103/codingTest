function solution(num_list) {
    num = num_list.reduce((acc,cur,i)=>i%2===0?acc+=cur:acc,0)
    num2 = num_list.reduce((acc,cur,i)=>i%2!==0?acc+=cur:acc,0)
    return Math.max(num, num2)
}