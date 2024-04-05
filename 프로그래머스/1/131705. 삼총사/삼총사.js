function solution(number) {
    let result = 0
    const len = number.length
    for(let i=0; i<len-2; i+=1){
        for(let j=i+1; j<len-1; j+=1){
            for(let k=j+1; k<len; k+=1){
                if(number[i] + number[j] + number[k] === 0) result += 1
            }
        }
    }
    
    return result
}