function solution(elements) {
    let set = new Set()
    let len = elements.length
    for(let i=1; i<=len; i++){
        for(let j=0; j<len; j++){
            let num = 0
            for(let k=j; k<j+i; k++){
                if(k<len) num += elements[k]
                else{
                    num += elements[k-len]
                }
            }
            set.add(num)
        }
    }
    return set.size
}