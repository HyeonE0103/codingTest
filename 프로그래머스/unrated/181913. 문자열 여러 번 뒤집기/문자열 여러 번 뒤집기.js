function solution(s, q) {
    s = s.split('')
    for(let i=0; i<q.length; i++){
        s = [...s.slice(0, q[i][0]), ...s.slice(q[i][0], q[i][1]+1).reverse(), ...s.slice(q[i][1]+1)]
    }
    return s.join('')
}