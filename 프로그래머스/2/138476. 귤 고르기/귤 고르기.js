function solution(k, tangerine) {
    let result = 0
    let map = new Map()
    
    for(const el of tangerine) map.set(el, (map.get(el)||0)+1)
    map = [...map].sort((a,b)=>b[1]-a[1])
    
    for(let i=0; i<map.length; i++){
        k -= map[i][1]
        if(k<=0) return result+1
        else result += 1
    }
}