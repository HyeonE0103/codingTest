function solution(arr)
{
    let answer = []
    arr.unshift(-1)
    for(let i=1; i<=arr.length-1; i++){
        if(arr[i] !== arr[i-1]) answer.push(arr[i])
    }
    return answer
}