function solution(numer1, denom1, numer2, denom2) {
    let [numer, denom] = [numer1*denom2 + numer2*denom1, denom1*denom2]
    let num = 2
    
    while(num <= Math.min(numer, denom)){
        if(numer % num === 0 && denom % num === 0){
            numer /= num
            denom /= num
        }else num++
    }
    
    return [numer, denom]
}