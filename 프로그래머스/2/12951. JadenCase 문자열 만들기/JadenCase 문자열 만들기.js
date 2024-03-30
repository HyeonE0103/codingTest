function solution(s) {
    return s.toLowerCase().split(' ').map((x)=>x.slice(0,1).toUpperCase()+x.slice(1)).join(' ')
}