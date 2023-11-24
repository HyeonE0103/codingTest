function solution(n, m, section) {
    let result = 0, i = 0
    
    for(let el of section){
        if(i < el){
            result++
            i = el + m - 1
        }
    }
    
    return result
}