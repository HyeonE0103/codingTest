function solution(s) {
    const div = s.length / 2
    return s.length % 2 === 0 ? s.slice(div-1, div+1) : s.slice(parseInt(div), parseInt(div)+1)
}