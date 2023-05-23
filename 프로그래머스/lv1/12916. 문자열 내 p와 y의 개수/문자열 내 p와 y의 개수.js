function solution(s){
    s = s.toLowerCase()
    let num = 0
    for(let i=0; i<s.length; i++){
        if(s[i] === 'p') num++;
        else if(s[i] === 'y') num --;
    }
    if (num !== 0) return false
    else return true
    
}
