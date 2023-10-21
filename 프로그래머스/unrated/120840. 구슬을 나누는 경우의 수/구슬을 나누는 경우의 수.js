function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)))
}

function factorial(n){
    let number = 1
    for(let i=1; i<=n; i++){
        number *= i
    }
    return number
}