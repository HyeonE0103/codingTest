function solution(s) {
    return s.split(' ').map(w=>w.split('').reduce((acc,cur,i)=>acc + (i%2===0?cur.toUpperCase():cur.toLowerCase()),'')).join(' ')
}