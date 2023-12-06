function solution(n, n2=n+1) {
    return n.toString(2).match(/1/g).length === n2.toString(2).match(/1/g).length ? n2 : solution(n, n2+1)    
}