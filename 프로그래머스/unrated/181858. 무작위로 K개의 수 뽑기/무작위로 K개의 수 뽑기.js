function solution(arr, k) {
    arr = new Set(arr)
    arr = Array.from(arr)
    return arr.length > k ? arr.slice(0,k) : [...arr, ...Array(k-arr.length).fill(-1)]
}