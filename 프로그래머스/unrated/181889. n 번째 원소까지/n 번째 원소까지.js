function solution(num_list, n) {
    // return num_list.filter((x,i)=>{if(i<n) return x})
    return num_list.slice(0,n)
}