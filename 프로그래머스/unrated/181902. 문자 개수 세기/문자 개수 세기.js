function solution(my_string) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for(let i=0; i<my_string.length; i++){
        let s = my_string.charCodeAt(i)
        s > 96 ? result[s-97+26]++ : result[s-65]++
    }
    return result
}