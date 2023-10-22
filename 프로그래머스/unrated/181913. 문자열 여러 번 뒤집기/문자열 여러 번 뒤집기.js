function solution(my_string, queries) {
    let s = [...my_string]
    
    for(const [i, j] of queries){
        s = [...s.slice(0, i),
             ...s.slice(i, j+1).reverse(),
             ...s.slice(j+1)]
    }
    return s.join('')
}