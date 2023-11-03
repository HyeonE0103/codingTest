function solution(a, b, c, d) {
    const arr = [a, b, c, d]
    let map = new Map();
    
    for(const el of arr){
        map.has(el) ? map.set(el, map.get(el)+1) : map.set(el, 1)
    }
    
    map = Array.from(map).sort((a, b) => b[1] - a[1])
    
    if(map.length === 4) return Math.min(a, b, c, d)
    if(map.length === 1) return a * 1111
    if(map.length === 3) return map[1][0] * map[2][0]
    else{
        if(map[0][1] === 2) return (map[0][0] + map[1][0]) * Math.abs(map[0][0] - map[1][0])
        else return Math.pow(10 * map[0][0] + map[1][0], 2)
    }
}