function solution(s) {
    let result = [0,0]
    
    while(s != '1'){
        a = s.split('0').join('').length
        result[1] += s.length - a
        s = a.toString(2)
        result[0] += 1
    }
    return result
}