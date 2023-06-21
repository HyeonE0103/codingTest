function solution(s, n) {
    let answer = ""
    let str = 0
    for(let i=0; i<s.length; i++){
        if(s[i] === " "){
            answer += " "
            continue;
        }
        str = s.charCodeAt(i)
        if(str>=97){    //소문자
            str += n
            if(str > 122) str-=26
        }else{
            str += n
            if(str > 90) str-=26
        }
        answer += String.fromCharCode(str)
    }
    return answer
}