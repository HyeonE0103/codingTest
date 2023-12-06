function solution(n) {
    const num = n.toString(2).match(/1/g).length
    
    while(n++){
        if(num === n.toString(2).match(/1/g).length) return n
    }
    
}