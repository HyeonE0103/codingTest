function solution(number) {
    let l = number.length
    let answer = 0
    for(let i=0; i<l-2; i++){
        for(let j=i+1; j<l-1; j++){
            for(let k=j+1; k<l; k++){
                if((number[i]+number[j]+number[k]) === 0) answer++
            }
        }
    }
    return answer
}