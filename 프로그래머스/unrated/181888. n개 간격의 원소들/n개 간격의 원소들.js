// function solution(num_list, n) {
//     return num_list.filter((x,i)=>i%n===0)
// }

function solution(num_list, n) {
    return num_list.filter((_,i)=>!(i%n))
}