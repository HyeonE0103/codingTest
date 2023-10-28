function solution(chicken) {
    let result = 0
    while(chicken >= 10){
        chicken -= 9
        result++
    }
    
    return result
}