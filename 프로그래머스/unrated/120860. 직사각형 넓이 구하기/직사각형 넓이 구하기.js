function solution(dots) {
    let n = []
    let m = []
    for(const el of dots){
        n.push(el[0])
        m.push(el[1])
    }
    
    return (Math.max(...m) - Math.min(...m)) * (Math.max(...n) - Math.min(...n))
}