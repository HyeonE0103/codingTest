function solution(n) {
    let number = n
    let result = new Set()
    while(number !== 1){
        for(let i=2; i<=number; i++){
            if(number % i === 0){
                number /= i
                result.add(i)
                break
            }
        }
    }
    return Array.from(result)
}