function solution(arr, queries) {
    let result = []
    let nums
    for(let i=0; i<queries.length; i++){
        nums = arr.slice(queries[i][0], queries[i][1]+1)
        nums = nums.filter(x=>x>queries[i][2]).sort((a,b)=>a-b)
        nums.length === 0 ? result.push(-1) :  result.push(nums[0])
    }
    return result
}