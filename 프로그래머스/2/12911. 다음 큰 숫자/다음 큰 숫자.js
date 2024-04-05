function solution(n) {
    const num = n.toString(2).match(/1/g).length
    
    while(n+1){
        if((n+1).toString(2).match(/1/g).length === num) return n+1
        else n = n+1
    }
}