function solution(babbling) {
    let result = 0
    const pattern = /^(?:(aya|ye|woo|ma)(?!.*\1)){1,4}$/;
    
    for(const el of babbling){
        if(el.match(pattern)) result++
    }
    
    return result
}