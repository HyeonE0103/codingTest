function solution(my_string) {
    return [...my_string].map( x => {
        const string = new Set([ "a", "e", "i", "o", "u"])
        if(string.has(x) === false) return x
    }).join('')
}