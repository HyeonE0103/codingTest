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

// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }
// 제곱근이 정수면 약수의 개수가 홀수