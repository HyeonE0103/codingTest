function solution(s) {
    //공백일경우 x[0]은 undefined
    return s.split(' ').map(x =>x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(' ')
}