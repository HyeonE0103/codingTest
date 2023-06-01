function solution(num_list) {
    return Number(num_list.filter(x=>x%2!==0).join(""))+Number(num_list.filter(x=>x%2===0).join(""))
}