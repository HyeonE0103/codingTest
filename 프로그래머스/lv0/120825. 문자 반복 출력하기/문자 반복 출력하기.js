function solution(my_string, n) {
    return [...my_string].map(x=>{
        return x.repeat(n)
    }).join('')
}