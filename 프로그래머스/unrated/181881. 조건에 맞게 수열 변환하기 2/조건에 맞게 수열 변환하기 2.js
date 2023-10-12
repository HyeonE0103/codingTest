function solution(arr) {
    let result = 0
    let before = [-1]
    
    while(JSON.stringify(arr) !== JSON.stringify(before)){
        before = [...arr]
        
        arr = arr.map(x => {
            if(x >= 50 && x%2 === 0) return x/2
            else if(x < 50 && x%2 !== 0) return x*2+1
            else return x
        })
        
        result ++
    }
    return result-1
}