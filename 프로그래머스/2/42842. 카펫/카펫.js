function solution(brown, yellow) {
    const width = (brown+4+(Math.sqrt(Math.pow(brown+4,2)-4*4*(brown+yellow))))/4
    return height = [width, (brown+yellow)/width]
}