function solution(arr) {
    let result = arr[0]
    for(let i=1; i<arr.length; i+=1){
        result = lcm(result, arr[i])
    }
    
    return result
}

function lcm(a, b){
    return a * b / gcd(a, b)
}

function gcd(a, b){
    return (a % b) === 0 ? b : gcd(b, a % b);
}