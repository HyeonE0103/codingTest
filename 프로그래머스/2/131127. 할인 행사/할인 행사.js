function solution(want, number, discount) {
    let result = 0
    
    for(let i=0; i<discount.length - 9; i+=1){
        const slice = discount.slice(i, i+10);
        let flag = true
        
        for(let j=0; j<want.length; j+=1){
            if(slice.filter(item => item === want[j]).length !== number[j]){
                flag = false
                break
            }
        }
        if(flag) result += 1
    }
    return result
}