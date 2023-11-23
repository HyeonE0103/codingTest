function solution(number, limit, power) {
    let result = 0, num = 0
    for(let i=1; i<=number; i++){
        num = divisor(i)
        result += num > limit ? power : num
    }
    return result
}

function divisor(number){
    let result = 0, num = Math.sqrt(number)
    for(let i = 1; i<num; i++){
        if(number % i === 0) result++
    }
    return num === Math.floor(num) ? result * 2 + 1 : result * 2
}