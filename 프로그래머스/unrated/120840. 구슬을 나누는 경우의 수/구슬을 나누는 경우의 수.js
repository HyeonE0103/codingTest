function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)))
}

const factorial = (n) => n === 0 ? 1 : n * factorial(n-1)