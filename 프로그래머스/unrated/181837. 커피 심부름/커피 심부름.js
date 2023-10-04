function solution(order) {
    let result = 0
    for(const el of order){
        result += el.includes('cafelatte') ? 5000 : 4500
    }
    return result
}