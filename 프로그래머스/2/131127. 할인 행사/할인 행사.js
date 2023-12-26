function solution(want, number, discount) {
    let result = 0
    for(let i=0; i<=discount.length-10; i++){
        let flag = true
        const slice = discount.slice(i, i+10)
        
        for(let j=0; j<want.length; j++){
            if(slice.filter(item => item === want[j]).length !== number[j]){
                flag = false
                break
            }
        }
        if(flag) result += 1
    }
    return result
}