function solution(array) {
    const arr = new Array(1000).fill(0)
    
    for(const el of array) arr[el]++

    const max = Math.max(...arr)
    
    return arr.indexOf(max) === arr.lastIndexOf(max) ? arr.indexOf(max) : -1
}