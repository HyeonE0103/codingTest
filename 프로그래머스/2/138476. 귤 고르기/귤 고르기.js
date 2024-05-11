function solution(k, tangerine) {
    let kind = new Map()
    let result = 0
    
    for(let i=0; i<tangerine.length; i+=1){
        kind.has(tangerine[i]) ? kind.set(tangerine[i], kind.get(tangerine[i])+1) : kind.set(tangerine[i], 1)
    }
    
    kind = Array.from(kind).sort((a,b) => b[1] - a[1])
    
    for(let i=0; i<kind.length; i+=1){
        if(k <= 0) break
        k -= kind[i][1]
        result += 1
    }
    
    return result
}