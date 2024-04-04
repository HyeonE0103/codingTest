function solution(t, p) {
    let result = 0
    
    for(let i=0; i<t.length-p.length+1; i+=1){
        if(t.slice(i,i+p.length) <= p) result += 1
    }
    return result
}