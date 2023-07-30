function solution(s) {
    const stack = []
    s.split(' ').forEach((target) =>{
        if(target === 'Z') stack.pop();
        else stack.push(Number(target))
    })
    return stack.reduce((acc, cur)=>acc+=cur,0)
}