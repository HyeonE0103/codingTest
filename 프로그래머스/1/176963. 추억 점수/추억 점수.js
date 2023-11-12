function solution(name, yearning, photo) {
    let map = new Map()
    let result = []
    
    for(let i=0; i<name.length; i++){
        map.set(name[i], yearning[i])
    }
    
    for(const el of photo){
        let num = 0
        
        for(const i of el){
            num += map.get(i) ? map.get(i) : 0
        }
        
        result.push(num)
    }
    
    return result
}