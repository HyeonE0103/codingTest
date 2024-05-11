function solution(k, tangerine) {
    let kind = new Map()
    let result = 0
    
    for (let size of tangerine)
        kind.set(size, (kind.get(size) || 0) + 1)
    
    const count = [...kind.values()].sort((a, b) => b - a)
    
    for (let n of count){
        k -= n
        result += 1
        if(k <= 0) return result
    }
}