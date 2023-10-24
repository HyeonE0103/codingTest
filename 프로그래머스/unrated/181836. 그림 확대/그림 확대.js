function solution(picture, k) {
    let result = []
    for(const i of picture){
        let s = ''
        for(const j of i){
            s += j.repeat(k)
        }
        result = [...result, ...Array(k).fill(s)]
    }
    return result
}