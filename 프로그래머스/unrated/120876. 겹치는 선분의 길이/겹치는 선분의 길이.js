function solution(lines) {
    let map = new Map();
    let result = 0
    
    for(let i=0; i<lines.length; i++){
        for(let j=lines[i][0]; j<lines[i][1]; j++){
            map.has(`${j}-${j+1}`) ? map.set(`${j}-${j+1}`, map.get(`${j}-${j+1}`)+1) : map.set(`${j}-${j+1}`, 1)
        }
    }
    
    map = [...map]
        
    for(let i=0; i<map.length; i++){
        if(map[i][1] >= 2) result ++
    }
    
    return result
}