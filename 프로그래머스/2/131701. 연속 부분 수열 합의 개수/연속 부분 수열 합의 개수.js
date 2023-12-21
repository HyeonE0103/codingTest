function solution(elements) {
    const len = elements.length
    const set = new Set()
    for(let i=0; i<len; i++){
        let num = 0
        for(let j=0; j<len; j++){
            num += i+j >= len ? elements[i+j-len] : elements[i+j]
            set.add(num)
        }
    }
    return set.size
}