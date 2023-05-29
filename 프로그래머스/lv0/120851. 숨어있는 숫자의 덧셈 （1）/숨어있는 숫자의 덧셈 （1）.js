function solution(my_string) {
    return [...my_string].reduce((acc, cur) => {
        if(Number(cur)) acc+=parseInt(cur)
        return acc
    },0)
}