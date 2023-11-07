function solution(lines) {
    let map = new Map();
    let result = 0
    
    for(let i=0; i<lines.length; i++){
        for(let j=lines[i][0]; j<lines[i][1]; j++){
            map.set(`${j}-${j+1}`, (map.get(`${j}-${j+1}`) || 0) +1)
        }
        
    }
    
    map = [...map]
    
    return map.filter(x => x[1] >= 2).length
}