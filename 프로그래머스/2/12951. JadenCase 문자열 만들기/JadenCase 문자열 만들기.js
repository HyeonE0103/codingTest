function solution(s) {
    //길이 1이상인것을 생각해야 했음
    return s.split(' ').map(x =>{
        if(x.length === 0) return x
        else if(x.length === 1) return x.toUpperCase()
        else return x[0].toUpperCase() + x.slice(1).toLowerCase()
    }).join(' ')
}