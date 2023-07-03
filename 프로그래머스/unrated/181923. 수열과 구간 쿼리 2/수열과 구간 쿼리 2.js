function solution(arr, queries) {
    let answer = [];
    for(let i=0;i<queries.length;i++) {
        const [s,e,k] = queries[i];
        const nums = arr.slice(s, e+1).filter((x) => x > k).sort((a, b) => a - b);
        answer.push(nums.length === 0 ? -1 : nums[0]);
    }

    return answer;
}