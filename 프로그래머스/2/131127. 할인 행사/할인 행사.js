function solution(want, number, discount) {
    let wantMap = new Map()
    let result = 0
    
    for(let i=0; i<want.length; i+=1) wantMap.set(want[i], number[i])
    
    for(let i=0; i<discount.length-9; i+=1){
        const slice = discount.slice(i, i+11)
        let needs = new Map(wantMap)
        let flag = true
        
        for(let j=0; j<10; j+=1){
            if(!needs.has(slice[j]) || needs.get(slice[j]) < 1){
                flag = false
                break 
            }
            else needs.set(slice[j], needs.get(slice[j]) - 1)
        }
        
        if(flag) result += 1
    }
    
    return result
}