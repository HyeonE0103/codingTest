function solution(k, tangerine) {
    let map = new Map()
    let result = 0
    
    for(const el of tangerine){
        map.set(el,map.has(el)?map.get(el)+1:1)
    }
    map = [...map].sort((a,b)=>b[1]-a[1])
    
    for(let i=0; i<map.length; i++){
        k-=map[i][1]
        if(k<=0) return result+1
        else result += 1

    }
}