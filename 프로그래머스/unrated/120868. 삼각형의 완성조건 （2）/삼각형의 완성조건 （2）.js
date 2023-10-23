function solution(sides) {
    const min = Math.min(...sides)
    return 2 * min - 1
    
    //min + max > x >= max => min + max - max = min
    //max > x > max - min => max - max + min - 1 = min - 1
}