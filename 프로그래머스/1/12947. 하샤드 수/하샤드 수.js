function solution(x) {
    return x%(x+'').split('').reduce((acc,cur)=>acc+=Number(cur),0)===0?true:false
}