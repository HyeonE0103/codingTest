function solution(a, b) {
    [a, b] = [a, b].sort((x, y) => x-y)
    let num = 0
    for(let i=a; i<=b; i++) num += i
    return num
}