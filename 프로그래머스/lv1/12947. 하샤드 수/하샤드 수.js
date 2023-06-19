function solution(x) {
    num = [...String(x)].reduce((acc,cur)=>acc+=Number(cur), 0)
    return x % num === 0
}