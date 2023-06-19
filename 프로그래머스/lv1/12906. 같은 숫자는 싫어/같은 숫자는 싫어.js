// function solution(arr)
// {
//     let answer = []
//     arr.unshift(-1)
//     for(let i=1; i<=arr.length-1; i++){
//         if(arr[i] !== arr[i-1]) answer.push(arr[i])
//     }
//     return answer
// }

function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
    // 마지막 인덱스는 참조할 요소가 없어서 undefined이랑 비교함
}