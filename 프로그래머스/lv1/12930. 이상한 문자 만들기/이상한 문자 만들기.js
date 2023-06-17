function solution(s) {
    let num = 0
    let answer = ""
    for(let i=0; i<s.length; i++){
        if(s[i] === " "){
            answer += " "
            num = 0
        }else{
            if(num%2===0) answer += s[i].toUpperCase()
            else answer += s[i].toLowerCase()
            num++
        }
    }
    return answer
}