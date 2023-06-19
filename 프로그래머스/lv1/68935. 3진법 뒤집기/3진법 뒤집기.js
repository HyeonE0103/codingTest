function solution(n) {
    num=parseInt(n, 10).toString(3).split("").reverse().join("")
    return parseInt(num, 3)
}