function solution(s) {
    num = ~~(s.length/2)
    return s.length % 2 ? s.substr(num,1) : s.substr(num-1,2)
}