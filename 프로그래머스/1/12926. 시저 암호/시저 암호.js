function solution(s, n) {
    let result = ''
    
    for(let i=0; i<s.length; i++){
        if(s[i] === ' ') result += ' '
        else{
            let l = s[i].charCodeAt() + n
                
            if(s[i] === s[i].toUpperCase()){
                if(l > 90) l -= 26
            }else{
                if(l > 122) l -= 26
            }
            
            result += String.fromCharCode(l)
        }
    }
    return result
}