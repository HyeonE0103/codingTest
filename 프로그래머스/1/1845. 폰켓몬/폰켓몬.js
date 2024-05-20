function solution(nums) {
    const half = nums.length / 2
    const max = new Set(nums).size
    
    return max <= half ? max : half
}