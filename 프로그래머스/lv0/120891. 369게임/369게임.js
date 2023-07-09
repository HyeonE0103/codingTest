// function solution(order) {
//     return order.toString().split("").reduce((acc,cur)=>cur==='3' || cur ==='6' || cur === '9' ? acc+=1 : acc ,0)
// }

function solution(order) {
    return order.toString().replace(/[0,1,2,4,5,7,8]/g, '').length
}