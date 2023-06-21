function solution(left, right) {
    let answer = 0
    for(let i=left; i<=right; i++){
        isFactors(i) ? answer += i : answer -= i
    }
    return answer
}

function isFactors(num){
    let n = 2
    for(let i=2; i<num; i++){
        if(num % i === 0)
            n++
    }
    return num != 1 ? n % 2 ? false : true : false
}