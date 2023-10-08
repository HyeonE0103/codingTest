function solution(strArr) {
    len = Array(30).fill(0)
    for(const el of strArr) len[el.length-1]++
    return Math.max(...len)
}