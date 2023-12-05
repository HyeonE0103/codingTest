function solution(s) {
    let result = [0, 0]
    while(s !== '1'){
        let len = s.length
        s = s.split(0).join('')
        result[1] += len - s.length
        
        s = s.length.toString(2)
        result[0] ++
    }
    return result
}