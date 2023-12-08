function solution(brown, yellow) {
    const x = (-4 + brown + Math.sqrt( Math.pow(4-brown, 2) - 16 * yellow))/4
    return [x+2,yellow/x+2]
}