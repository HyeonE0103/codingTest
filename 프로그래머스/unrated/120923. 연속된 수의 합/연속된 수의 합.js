function solution(num, total) {
    const center = Math.ceil(total / num)
    const n = Math.floor(num / 2)
    
    return new Array(num).fill(center-n).map((x, i) => x + i)
}