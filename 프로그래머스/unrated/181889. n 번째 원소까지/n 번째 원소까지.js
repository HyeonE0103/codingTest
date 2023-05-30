function solution(num_list, n) {
    return num_list.filter((x,i)=>{if(i<n) return x})
}