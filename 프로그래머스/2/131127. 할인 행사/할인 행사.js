function solution(want, number, discount) {
    let map = new Map()
    let result = 0
    let arr = []
    
    for(let i=0; i<want.length; i++){
        map.set(want[i], number[i])
    }
    
    for(let i=0; i<=discount.length-10; i++){
        let flag = true
        if(map.has(discount[i])){
            let countMap = new Map([...map])
            for(j=i; j<=i+9; j++){
                if(countMap.get(discount[j])>0) countMap.set(discount[j], countMap.get(discount[j])-1)
                else{
                    flag = false
                    break
                }
            }
            if(flag) result += 1
        }
    }
    return result
}